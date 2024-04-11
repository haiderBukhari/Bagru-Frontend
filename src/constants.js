
import course from "./images/maths.avif";
import course2 from "./images/physics.jpg";
export const courses = [
    {
        name: 'maths',
        displayName: 'رياضيات',
        courseImage: course,
        authorImage: course,
        subCourses: [
            {
                name: '804',
                displayName: '804',
                courseImage: course,
                authorImage: course,
                details: [
                    {
                        name: 'sem1',
                        displayName: 'الفصل الأول',
                        courseImage: course,
                        authorImage: course,
                    },
                    {
                        name: 'sem2',
                        displayName: 'الفصل الثالث',
                        courseImage: course,
                        authorImage: course,
                    },
                    {
                        name: 'sem3',
                        displayName: 'الفصل الثاني',
                        courseImage: course,
                        authorImage: course,
                    }
                ]
            },
            {
                name: '805',
                displayName: '805',
                courseImage: course,
                authorImage: course,
                details: [
                    {
                        name: 'sem1',
                        displayName: 'الفصل الأول',
                        courseImage: course,
                        authorImage: course,
                    },
                    {
                        name: 'sem3',
                        displayName: 'الفصل الثاني',
                        courseImage: course,
                        authorImage: course,
                    }
                ]
            },
            {
                name: '806',
                displayName: '806',
                courseImage: course,
                authorImage: course,
                details: [
                    {
                        name: 'sem3',
                        displayName: 'الفصل الثاني',
                        courseImage: course,
                        authorImage: course,
                    }
                ]
            },
            {
                name: '807',
                displayName: '807',
                courseImage: course,
                authorImage: course,
                details: [
                    {
                        name: 'sem1',
                        displayName: 'الفصل الأول',
                        courseImage: course,
                        authorImage: course,
                    },
                ]
            },
            {
                name: '808',
                displayName: 'لا اعلم',
                courseImage: course,
                authorImage: course,
            }
            // {
            //     name: 'maths',
            //     displayName: '3 وحدات',
            //     courseImage: course,
            //     authorImage: course,
            // },
            // {
            //     name: 'maths-1',
            //     displayName: '4 وحدات',
            //     courseImage: course,
            //     authorImage: course,
            // },
            // {
            //     name: 'maths-2',
            //     displayName: '5 وحدات',
            //     courseImage: course,
            //     authorImage: course,
            // }
        ]
    },
    {
        name: 'physics',
        displayName: 'فيزياء',
        courseImage: course2,
        authorImage: course2,
        subCourses: []
    }
]

export const getCourseByName = (name) => {
    let data = null;
    async function searchCourse(givenCourses){
        for (let index = 0; index < givenCourses.length; index++) {
            if(givenCourses[index].name == name){
                data = givenCourses[index];
                break;
            }else if(givenCourses[index]?.subCourses?.length > 0){
                for(let j = 0; j < givenCourses[index]?.subCourses?.length; j++){
                    if(givenCourses[index]?.subCourses?.[j]?.name == name){
                        data = givenCourses[index]?.subCourses?.[j];
                        break;
                    }
                }
            }
        }
        return false;
    }
    searchCourse(courses)
    return data;
}