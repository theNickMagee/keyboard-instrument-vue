import { reactive } from 'vue';
import { samplerTypes } from '../assets/constants';

export const store = reactive({
    keys: [{
        key: "A",
        type: "Frequency",
        options: {
            hz: 500
        }
    },
    {
        key: "S",
        type: "Sampler",
        options: {
            type: "Bongo Snare"
        }
    }
    ],
    presets: [{
        name: "Type Showcase",
        keys: [{
            key: "A",
            type: "Frequency",
            options: {
                hz: 500
            }
        },
        {
            key: "S",
            type: "Sampler"
        }
        ]
    }, {
        name: "Bongos",
        keys: [{
            key: "A",
            type: "Sampler",
            options: {
                type: "Bongo Snare"
            }
        },
        {
            key: "S",
            type: "Sampler",
            options: {
                type: "Bongo Kick"
            }
        }
        ]
    },

    {
        name: "Alphabet Frequency Scale",
        keys: [{
            key: "A",
            type: "Frequency",
            options: {
                hz: 110
            }
        },
        {
            key: "B",
            type: "Frequency",
            options: {
                hz: 123.47
            }
        },
        {
            key: "C",
            type: "Frequency",
            options: {
                hz: 65.41
            }
        },
        {
            key: "D",
            type: "Frequency",
            options: {
                hz: 73.42
            }
        },
        {
            key: "E",
            type: "Frequency",
            options: {
                hz: 82.41
            }
        },
        {
            key: "F",
            type: "Frequency",
            options: {
                hz: 87.31
            }
        },
        {
            key: "G",
            type: "Frequency",
            options: {
                hz: 98
            }
        }

        ]
    }
    ],
    currentPresetName: 'Name Here'
})