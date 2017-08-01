/**
 * Copyright 2015 Longtail Ad Solutions Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 **/

/* jshint esversion: 6 */
/* globals require, browser, angular */

const
    {defineSupportCode} = require('cucumber');

defineSupportCode(function ({After, Before, setDefaultTimeout, defineParameterType}) {

    Before(function () {
        const world = this;

        // Make sure this is ran only once.
        if (!world.user) {
            world.user = null;
        }

        return browser.addMockModule('firebase', function () {

            angular.module('firebase').factory('$firebaseObject', function () {
                return function () {
                    return {
                        $loaded: function () {
                            return Promise.resolve({});
                        }
                    };
                };
            });

            angular.module('firebase').factory('$firebaseArray', function () {
                return function () {
                    return {
                        $loaded: function () {
                            return Promise.resolve({});
                        }
                    };
                };
            });

            angular.module('firebase').factory('$firebaseAuth', function () {

                    window.firebase = {
                        initializeApp: function () {
                            return Promise.resolve();
                        },
                        database: function () {
                            return {
                                ref: function () {
                                    return Promise.resolve();
                                }
                            };
                        }
                    };

                    return function () {
                        return {
                            $waitForSignIn: function () {
                                return Promise.resolve();
                            },
                            $getAuth: function () {
                                return null;
                            },
                            $onAuthStateChanged: function () {

                            },
                            $createUserWithEmailAndPassword: function () {
                                return Promise.resolve({
                                    sendEmailVerification: function () {
                                        return Promise.resolve();
                                    }
                                });
                            },
                            $signInWithEmailAndPassword: function () {
                                return Promise.resolve({
                                    emailVerified: true
                                });
                            },
                            $signOut: function () {

                                return Promise.resolve();
                            }
                        };
                    };
                }
            );
        });

    });

    Before("@mock-user-logged-in", function () {
        return browser.addMockModule('app', function () {
            angular.module('firebase').factory('$firebaseAuth', function () {
                return function () {
                    return {
                        $waitForSignIn: function () {
                            return Promise.resolve();
                        },
                        $getAuth: function () {
                            return {
                                displayName: 'John Doe',
                                email: 'johndoe@test.com'
                            };
                        },
                        $onAuthStateChanged: function () {
                            // noop mock
                        },
                        $createUserWithEmailAndPassword: function () {
                            return Promise.resolve({
                                sendEmailVerification: function () {
                                    return Promise.resolve();
                                }
                            });
                        },
                        $signInWithEmailAndPassword: function () {

                            return Promise.resolve({
                                emailVerified: true
                            });
                        },
                        $signOut: function () {
                            return Promise.resolve();
                        }
                    };
                };
            });
        });
    });

    Before("@mock-user-create-error", function () {

        return browser.addMockModule('app', function () {
            angular.module('firebase').factory('$firebaseAuth', function () {
                return function () {
                    return {
                        $waitForSignIn: function () {
                            return Promise.resolve();
                        },
                        $getAuth: function () {
                            return null;
                        },
                        $onAuthStateChanged: function () {
                            // noop mock
                        },
                        $createUserWithEmailAndPassword: function (email, password) {
                            return Promise.resolve({
                                sendEmailVerification: function () {
                                    return Promise.resolve();
                                }
                            });
                        },
                        $signInWithEmailAndPassword: function (email, password) {
                            return Promise.reject(new Error());
                        },
                        $signOut: function () {
                            return Promise.resolve();
                        }
                    };
                };
            });
        });
    });
});
