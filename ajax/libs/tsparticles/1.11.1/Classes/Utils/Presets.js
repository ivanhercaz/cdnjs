import { MoveDirection } from "../../Enums/MoveDirection";
import { OutMode } from "../../Enums/OutMode";
import { PresetType } from "../../Enums/PresetType";
import { ShapeType } from "../../Enums/ShapeType";
import { HoverMode } from "../../Enums/Modes/HoverMode";
export class Presets {
    static getPreset(key) {
        return this.available[key.toString()];
    }
    static get available() {
        return {
            [PresetType.basic]: this.basic,
            [PresetType.backgroundMask]: this.backgroundMask,
            [PresetType.fontAwesome]: this.fontAwesome,
            [PresetType.snow]: this.snow,
            [PresetType.bouncing]: this.bouncing,
            [PresetType.stars]: this.stars,
        };
    }
    static get basic() {
        return {
            particles: {
                color: {
                    value: "#ffffff",
                },
                lineLinked: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outMode: OutMode.out,
                    speed: 2,
                },
            },
        };
    }
    static get backgroundMask() {
        return {
            backgroundMask: {
                cover: {
                    value: {
                        b: 255,
                        g: 255,
                        r: 255,
                    },
                },
                enable: true,
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: HoverMode.bubble,
                    },
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 1,
                        size: 100,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                lineLinked: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 1,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outMode: OutMode.out,
                    random: false,
                    speed: 2,
                    straight: false,
                },
                opacity: {
                    random: false,
                    value: 1,
                },
                shape: {
                    type: ShapeType.circle,
                },
                size: {
                    random: true,
                    value: 30,
                },
            },
        };
    }
    static get fontAwesome() {
        return {
            particles: {
                shape: {
                    character: {
                        fill: true,
                        font: "Font Awesome 5 Free",
                        style: "",
                        weight: "400",
                    },
                    type: ShapeType.character,
                },
                size: {
                    random: false,
                    value: 16,
                },
            },
        };
    }
    static get snow() {
        return {
            particles: {
                color: {
                    value: "#fff",
                },
                move: {
                    bounce: false,
                    direction: MoveDirection.bottom,
                    enable: true,
                    outMode: OutMode.out,
                    random: false,
                    speed: 2,
                    straight: false,
                },
                opacity: {
                    random: true,
                    value: 0.5,
                },
                shape: {
                    type: ShapeType.circle,
                },
                size: {
                    random: true,
                    value: 10,
                },
            },
        };
    }
    static get bouncing() {
        return {
            particles: {
                move: {
                    outMode: OutMode.bounce,
                },
            },
        };
    }
    static get stars() {
        return {
            particles: {
                color: {
                    value: "#ffffff",
                },
                lineLinked: {
                    enable: false,
                },
                move: {
                    bounce: false,
                    direction: MoveDirection.none,
                    enable: true,
                    outMode: OutMode.out,
                    random: true,
                    speed: 0.3,
                    straight: false,
                },
                opacity: {
                    anim: {
                        enable: true,
                        minimumValue: 0,
                        speed: 1,
                        sync: false,
                    },
                    random: true,
                    value: 1,
                },
                shape: {
                    type: ShapeType.circle,
                },
                size: {
                    random: true,
                    value: 3,
                },
            },
        };
    }
}
//# sourceMappingURL=Presets.js.map