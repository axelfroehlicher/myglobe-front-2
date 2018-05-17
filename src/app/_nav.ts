export const navItems = [
  {
    name: 'Acceuil',
    url: '/home',
    icon: 'icon-home',
  },
  {
    title: true,
    name: 'Collaborateurs'
  },
  {
    name: 'Mon planning',
    url: '/planning',
    icon: 'icon-calendar',
  },
  {
    name: 'Remplir ma fiche',
    url: '/report',
    icon: 'icon-note',
  },
  {
    name: 'Gestion commerciale',
    url: '/managment',
    icon: 'icon-briefcase',
  },
  {
    name: 'Mes documents',
    url: '/folders',
    icon: 'icon-folder',
  },
  {
    name: 'Clients',
    url: '/customers',
    icon: 'icon-people',
    children: [
      {
        name: 'Liste',
        url: '/customers/list',
        icon: 'icon-list'
      },
      {
        name: 'Carte',
        url: '/customers/map',
        icon: 'icon-map'
      }
    ]
  }
];
