export interface Education {
    qualification: string
    institution: string
    period: string
    image?: string
}

export interface Experience {
    role: string
    company: string
    period: string
    description?: string
    image?: string
}

export const education: Education[] = [
    {
        qualification: "Bachelor of Information Technology",
        institution: "Federation University Australia",
        period: "2016-2019"
    },
    {
        qualification: "Bachelor of Business (Management)",
        institution: "Federation University Australia",
        period: "2019-2022"
    }
]

export const experience: Experience[] = [
    {
        role: "Web Developer",
        company: "Skin Ski + Surf",
        period: "2024-Current"
    },
    {
        role: "IT Administrator",
        company: "UtilitiseIT",
        period: "2022-2024"
    }
]