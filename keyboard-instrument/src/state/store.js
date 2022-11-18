import { reactive } from 'vue';

export const store = reactive({
    keys: [{
        key: "A",
        type: "Frequency"
    },
    {
        key: "B",
        type: "Tone"
    },
    ],
    presets: [{
        name: "Subwoofer",
        keys: [{
            key: "Z",
            type: "Tone"
        },
        {
            key: "R",
            type: "Clip"
        },
        ]
    },
    {
        name: "Alphabet Scale",
        keys: [{
            key: "A",
            type: "Frequency"
        },
        {
            key: "B",
            type: "Frequency"
        },
        {
            key: "C",
            type: "Frequency"
        },
        {
            key: "D",
            type: "Frequency"
        },
        {
            key: "E",
            type: "Frequency"
        },
        {
            key: "F",
            type: "Frequency"
        },
        {
            key: "G",
            type: "Frequency"
        }

        ]
    }
    ],
    currentPresetName: 'Name Here'
})