import {ENavBar, NavBarMetaData} from "../../entities/NavBarMetaData";

export class TemplateUtils {
	public static getNavBapMetadata(): NavBarMetaData {
		return [
			{
				isActive: false,
				name: ENavBar.TODOS,
				path: '/',
			},
			{
				isActive: false,
				name: ENavBar.USERS,
				path: '/users',
			},
		];
	}

	public static setActiveByName(navName: ENavBar): NavBarMetaData {
		const navBarMetadata = TemplateUtils.getNavBapMetadata();
		const findNav = navBarMetadata.find(({name}) => name === navName);
		findNav.isActive = true;
		return navBarMetadata;
	}
}
