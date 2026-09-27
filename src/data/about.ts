export interface Education {
    institution: string
    course: string
    period: string
    image?: string
}

export interface Experience {
    role: string
    company: string
    period: string
    description: string
    image?: string
}

export const education: Education[] = [
    {
        institution: "Federation University Australia",
        course: "Bachelor of Information Technology",
        period: "2016-2019"
    }
]