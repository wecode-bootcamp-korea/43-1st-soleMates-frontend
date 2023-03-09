import React from 'react';
import './ListMenu.scss';
const ListMenu = () => {
  return (
    <>
      <h2 className="screen_out">닥터마틴 메인 메뉴</h2>
      <ul className="list_menu">
        {CATE_LIST.map(item => (
          <li key={item.id}>
            <a href={item.link} className="link_menu">
              {item.txt}
            </a>
            {item.submenu && (
              <>
                <strong className="screen_out">중분류</strong>
                <div className="wrap_submenu">
                  {item.submenu.map(subItem => (
                    <dl className="list_submenu" key={subItem.id}>
                      <dt>
                        <a href={subItem.link} className="link_submenu">
                          {subItem.title}
                        </a>
                      </dt>
                      {subItem.submenu2 &&
                        subItem.submenu2.map(subItem2 => (
                          <dd key={subItem2.id}>
                            <a href="#none" className="link_submenu">
                              {subItem2.subtxt}
                            </a>
                          </dd>
                        ))}
                    </dl>
                  ))}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListMenu;

const CATE_LIST = [
  {
    id: 1,
    link: '#none',
    txt: '슈즈',
    submenu: [
      {
        id: 1,
        title: 'NEW IN',
        link: '#none',

        submenu2: [
          {
            id: 1,
            subtxt: '여성',
          },
          {
            id: 2,
            subtxt: '오오',
          },
          {
            id: 3,
            subtxt: '크크',
          },
          {
            id: 4,
            subtxt: '슈즈',
          },
          {
            id: 5,
            subtxt: '나온다',
          },
        ],
      },
      {
        id: 2,
        title: 'BEST',
        link: '#none',
        submenu2: [
          {
            id: 1,
            subtxt: '남성',
          },
          {
            id: 2,
            subtxt: '신발',
          },
          {
            id: 3,
            subtxt: '크크',
          },
        ],
      },
      {
        id: 3,
        title: 'NEW',
        link: '#none',
        submenu2: [
          {
            id: 1,
            subtxt: '키즈',
          },
          {
            id: 2,
            subtxt: '오오',
          },
          {
            id: 3,
            subtxt: '크크',
          },
        ],
      },
      {
        id: 4,
        title: 'BEST',
        link: '#none',
        submenu2: [
          {
            id: 1,
            subtxt: '여성',
          },
          {
            id: 2,
            subtxt: '오오',
          },
          {
            id: 3,
            subtxt: '크크',
          },
          {
            id: 4,
            subtxt: '슈즈',
          },
          {
            id: 5,
            subtxt: '나온다',
          },
        ],
      },
      {
        id: 5,
        title: 'BEST',
        link: '#none',
        submenu2: [
          {
            id: 1,
            subtxt: '남성',
          },
          {
            id: 2,
            subtxt: '신발',
          },
          {
            id: 3,
            subtxt: '크크',
          },
        ],
      },
      {
        id: 6,
        title: 'BEST',
        link: '#none',
        submenu2: [
          {
            id: 1,
            subtxt: '남성',
          },
          {
            id: 2,
            subtxt: '신발',
          },
          {
            id: 3,
            subtxt: '크크',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    link: '#none',
    txt: '부츠',
    submenu: [
      {
        id: 1,
        title: '일이삼사오육',
        link: '#none',
        submenu2: [
          {
            id: 1,
            subtxt: '남성',
          },
          {
            id: 2,
            subtxt: '신발',
          },
          {
            id: 3,
            subtxt: '크크',
          },
        ],
      },
      {
        id: 2,
        title: '나온다~~~',
        link: '#none',
        submenu2: [
          {
            id: 1,
            subtxt: '남성',
          },
          {
            id: 2,
            subtxt: '신발',
          },
          {
            id: 3,
            subtxt: '크크',
          },
        ],
      },
      {
        id: 3,
        title: '크크크',
        link: '#none',
        submenu2: [
          {
            id: 1,
            subtxt: '남성',
          },
          {
            id: 2,
            subtxt: '신발',
          },
          {
            id: 3,
            subtxt: '크크',
          },
        ],
      },
      {
        id: 4,
        title: 'ㅇ오오오오',
        link: '#none',
      },
    ],
  },
  { id: 3, link: '#none', txt: '샌들' },
  { id: 4, link: '#none', txt: '악세서리' },
  {
    id: 5,
    link: '#none',
    txt: '주니어',
    submenu: [
      {
        id: 1,
        title: '일이삼사오육',
        link: '#none',
        submenu2: [
          {
            id: 1,
            subtxt: '남성',
          },
          {
            id: 2,
            subtxt: '신발',
          },
          {
            id: 3,
            subtxt: '크크',
          },
        ],
      },
      {
        id: 2,
        title: '나온다~~~',
        link: '#none',
        submenu2: [
          {
            id: 1,
            subtxt: '남성',
          },
          {
            id: 2,
            subtxt: '신발',
          },
          {
            id: 3,
            subtxt: '크크',
          },
        ],
      },
      {
        id: 3,
        title: '크크크',
        link: '#none',
      },
      {
        id: 4,
        title: 'ㅇ오오오오',
        link: '#none',
        submenu2: [
          {
            id: 1,
            subtxt: '남성',
          },
          {
            id: 2,
            subtxt: '신발',
          },
          {
            id: 3,
            subtxt: '크크',
          },
        ],
      },
    ],
  },
];
