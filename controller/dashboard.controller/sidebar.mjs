const sidebarMenuList = [
    {
        id: 1,
        title: 'Projects',
        link: '/projects',
        active: false,
        subMenus: [
            {
                id: 1,
                title: 'Summary',
                link: '/summary',
                active: false,
                subMenus: null
            },
            {
                id: 2,
                title: 'My Projects',
                link: '/my-projects',
                active: false,
                subMenus: null
            },
            {
                id: 3,
                title: 'Documents',
                link: '/documents',
                active: false,
                subMenus: null
            }
        ]
    },
    {
        id: 2,
        title: 'Schools',
        link: '/schools',
        active: false,
        subMenus: null
    },
    {
        id: 3,
        title: 'License',
        link: '/license',
        active: false,
        subMenus: null
    },
    {
        id: 4,
        title: 'Support',
        link: '/support',
        active: false,
        subMenus: null
    },
    {
        id: 5,
        title: 'Notifications',
        link: '/notifications',
        active: false,
        subMenus: null
    },
];

const sidebarMenuListUpdate = (list, id, childId) => {
    return list.map(item => {
        if(item.id === id) {
            if(item.subMenus){
                return {
                    ...item,
                    active: true,
                    subMenus: item.subMenus.map(sub => {
                        if(sub.id === childId) {
                            return {
                                ...sub,
                                active: true
                            };
                            return sub;
                        }
                    })
                };
            }else {
                return {
                    ...item,
                    active: true
                };
            }
        }
        return item;
    });
}

export { 
    sidebarMenuList,
    sidebarMenuListUpdate
};