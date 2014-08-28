"use strict";
var factory = require("../../utils/factory");

factory.register(
    "retrieveStateCluster",
    {
        typical: function () {
            return {
                primers: [
                    factory.make("typical saveState")
                ],
                main: factory.make("typical retrieveState")
            };
        },
        withRegistration: function () {
            var uuid = factory.make("good UUID"),
                obj = {
                    primers: [
                        factory.make("typical saveState")
                    ],
                    main: factory.make("typical retrieveState")
                };

            obj.primers[0].params.registration = uuid;
            obj.main.params.registration = uuid;

            return obj;
        }
    }
);
