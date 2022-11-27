import { reactive } from 'vue';

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
        type: "Sampler"
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
    },
    {
        name: "Alphabet Casio Scale",
        keys: [{
            key: "A",
            type: "casio"
        },
        {
            key: "B",
            type: "casio"
        },
        {
            key: "C",
            type: "casio"
        },
        {
            key: "D",
            type: "casio"
        },
        {
            key: "E",
            type: "casio"
        },
        {
            key: "F",
            type: "casio"
        },
        {
            key: "G",
            type: "casio"
        }

        ]
    }
    ],
    currentPresetName: 'Name Here'
})