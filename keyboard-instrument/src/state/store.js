import { reactive } from 'vue';


export const store = reactive({
    keys: [
        {
            key: "A",
            type: "Sampler",
            options: {
                type: "Bongo Snare",
                note: "C1",
                volume: 1,
                duration: 0.5,
                velocity: 1,
                loop: false,
                padsSet: [1, 8],
            }
        },
        {
            key: "S",
            type: "Frequency",
            options: {
                type: "triangle",
                note: "C1",
                volume: 1,
                attack: 0.1,
                decay: 0.2,
                sustain: 1.0,
                release: 0.8,
                hz: "C1"
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
                type: "Bongo Snare",
                note: "C1",
                volume: 1,
                duration: 0.5,
                velocity: 1
            }
        },
        {
            key: "S",
            type: "Sampler",
            options: {
                type: "Bongo Kick",
                note: "C1",
                volume: 1,
                duration: 0.5,
                velocity: 1

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