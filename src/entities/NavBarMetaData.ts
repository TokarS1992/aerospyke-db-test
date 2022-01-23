export enum ENavBar {
	TEMPLATES = 'Template',
	USERS = 'Users',
}

interface NavBar {
	isActive: boolean;
	name: ENavBar;
	path: string;
}

export type NavBarMetaData = NavBar[];
