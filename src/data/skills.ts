import { faJs ,faPython, faReact, faVuejs, faPhp, faCss, faTypescript, faBootstrap, faTailwindCss, faNextcloud } from '@fortawesome/free-brands-svg-icons'
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export interface Skill {
    title: string
    description?: string
    faIcon?: IconDefinition
    colour?: string
}

export const frontend: Skill[] = [
    {
        title: "JavaScript",
        description: "Web Development, scripting, aysnchronous functions",
        faIcon: faJs,
        colour: "#F7DF1E"
    },
    {
        title: "TypeScript",
        description: "Web Development, scripting, aysnchronous functions",
        faIcon: faTypescript,
        colour: "#3178C6"
    },
    {
        title: "React",
        description: "Components, Hooks, Refs, State",
        faIcon: faReact,
        colour: "#61DAFB"
    },
    {
        title: "Next.js",
        description: "Components, Hooks, Refs, State",
        colour: "#61DAFB"
    },
    {
        title: "Vue",
        faIcon: faVuejs,
        colour: "#4FC08D"
    },
    {
        title: "Tailwind CSS",
        description: "Utilities, Responsive Classes",
        faIcon: faTailwindCss,
        colour: "#127a9a"
    },
    {
        title: "CSS",
        faIcon: faCss,
        colour: "#dede2f"
    },
    {
        title: "Bootstrap",
        description: "",
        faIcon: faBootstrap,
        colour: "#c300ff"
    }
]

export const backend: Skill[] = [
    {
        title: "Python",
        description: "GUIs, Scripting",
        faIcon: faPython,
        colour: "#e3ff0d"
    },
    {
        title: "PHP",
        description: "APIs, Authentication",
        faIcon: faPhp,
        colour: "#132a9c"
    },
    {
        title: "Laravel",
        description: "Routes, Controllers",
        faIcon: faPhp,
        colour: "#5f189e"
    }
]

export const tools: Skill[] = [
    {
        title: "Git",
        description: "GUIs, Scripting",
        faIcon: faPython,
        colour: "#e3ff0d"
    },
    {
        title: "Docker",
        description: "APIs, Authentication",
        faIcon: faPhp,
        colour: "#132a9c"
    },
    {
        title: "Linux",
        description: "Routes, Controllers",
        faIcon: faPhp,
        colour: "#5f189e"
    }
]