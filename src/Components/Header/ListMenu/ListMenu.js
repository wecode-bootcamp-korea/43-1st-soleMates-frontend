import React from 'react';
import { CATE_LIST } from './CateList.js';
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
