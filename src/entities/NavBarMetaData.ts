export enum ENavBar {
	TODOS = 'Todos',
	USERS = 'Users',
	TEMPLATES = 'Templates',
}

interface NavBar {
	isActive: boolean;
	name: ENavBar;
	path: string;
}

export type NavBarMetaData = NavBar[];
