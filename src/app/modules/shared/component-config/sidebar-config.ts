import { SidebarIcons } from "../enums/icons.enums";

export class SidebarConfiguration {
    sidebarIcon : SidebarIcons = new SidebarIcons()

    sidebarTabs = [
        {
            href : '',
            route : './about',
            icon : this.sidebarIcon.aboutMe,
            tabName : 'About Me'
        },
        {
            href : '',
            route : './experience',
            icon : this.sidebarIcon.workExperience,
            tabName : 'Work Experience'
        },
        {
            href : '',
            route : './education',
            icon : this.sidebarIcon.education,
            tabName : 'Education'
        },
        {
            href : '',
            route : './achievement',
            icon : this.sidebarIcon.achievement,
            tabName : 'Achievement'
        },
        {
            href : '',
            route : './blog',
            icon : this.sidebarIcon.blog,
            tabName : 'Blog'
        },
        {
            href : '',
            route : './home',
            icon : this.sidebarIcon.home,
            tabName : 'Home'
        }

    ]
}