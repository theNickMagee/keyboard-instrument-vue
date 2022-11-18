import { reactive } from 'vue';

export const store = reactive({
    keys: [{
        key: "A",
        type: "casio"
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