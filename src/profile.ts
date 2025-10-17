const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: './',
    title: 'JL.',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Lin-416',
    role: 'C&CPP Programmer',
    picture: 'img.jpg',

    description:
        '大三在校 喜欢编程喜欢车',
    resume: 'https://github.com/Lin-416/',
}

const projects = [
    {
        name: 'Dashboard',
        description:
            `用tauri搭建的行车数据显示仪
            通过stm32读取并在树莓派中显示数据`,
        stack: ['React', 'Tauri', 'C', 'Rust', 'Typescript'],
        sourceCode: 'https://github.com/Lin-416/dashboard',
        livePreview: ''
    },
]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'CPP',
    'Embedded Software',
    'MCU',
    'React',
    'React Native',
    'TypeScript',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'lijianlin050416@outlook.com',
}

export { header, about, projects, skills, contact }
