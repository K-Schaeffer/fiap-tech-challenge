export const icons = {
    avatar: '/assets/Avatar.svg',
    delete: '/assets/Delete.svg',
    edit: '/assets/Edit.svg',
    menu: '/assets/Menu.svg',
    olho: '/assets/Olho.svg',
  } as const;
  
  export type IconName = keyof typeof icons;