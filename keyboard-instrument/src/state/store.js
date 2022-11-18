import { reactive } from 'vue';

export const store = reactive({
    keys: [{
        key: "a",
        type: "Frequency"
    },
    {
        key: "b",
        type: "Tone"
    },
    ],
    presets: [{
        name: "Subwoofer",
        keys: [{
            key: "z",
            type: "Tone"
        },
        {
            key: "r",
            type: "Clip"
        },
        ]
    },
    {
        name: "Alphabet Scale",
        keys: [{
            key: "a",
            type: "Frequency"
        },
        {
            key: "b",
            type: "Frequency"
        },
        {
            key: "c",
            type: "Frequency"
        },
        {
            key: "d",
            type: "Frequency"
        }

        ]
    }
    ],
    currentPresetName: 'Name Here'
})