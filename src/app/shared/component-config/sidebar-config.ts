import { SidebarIcons } from "../enums/icons.enums";

export class SidebarConfiguration {
    sidebarIcon : SidebarIcons = new SidebarIcons()

    sidebarTabs = [
        {
            href : '',
            icon : this.sidebarIcon.aboutMe,
            tabName : 'About Me'
        },
        {
            href : '',
            icon : this.sidebarIcon.workExperience,
            tabName : 'Work Experience'
        },
        {
            href : '',
            icon : this.sidebarIcon.education,
            tabName : 'Education'
        },
        {
            href : '',
            icon : this.sidebarIcon.achievement,
            tabName : 'Achievement'
        },
        {
            href : '',
            icon : this.sidebarIcon.blog,
            tabName : 'Blog'
        },
        {
            href : '',
            icon : this.sidebarIcon.home,
            tabName : 'Home'
        }

    ]
}