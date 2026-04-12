import { Menu } from '../tsx.items/items.menu/menu';

const certificationsPageContent = () => {
    return (
        <>
            <div className="projects-page">
                <div className="projects-page__title">MY CERTIFICATIONS</div>
                <div className="projects-page__title__heading"></div>
                <ul className="menu-content__item--list">
                    <li className="projects-page__item--list-item">
                        <div>
                            <div className="projects-page__item--list-item__heading">Here are my reults of 1.5 years of participation in a team-based SoftServe courses</div>
                            <div className='projects-page__item--list-item__title'>Scroll down
                                <svg viewBox="0 0 24 24" className="projects-page__button--icon-1" style={{ margin: "0 0 -6.5px 2px", transform: 'rotate(90deg)' }}>
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li className="projects-page__item--list-item">
                        <div>
                            <div className="projects-page__item--list-item__heading">Certification: html/css</div>
                            <a href='/Certificate-htmlcss.pdf' download="rozhalovsky/html/css.pdf" className='projects-page__button-hidden--item'>Download
                                <svg viewBox="0 0 24 24" className="projects-page__button--icon-1" style={{ margin: "0 0 -6.5px 2px", transform: 'rotate(90deg)' }}>
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </li>
                    <li className="projects-page__item--list-item">
                        <div>
                            <div className="projects-page__item--list-item__heading">Certification: JS Development</div>
                            <a href='/Certificate-JS.pdf' download="rozhalovsky/js.pdf" className='projects-page__button-hidden--item'>Download</a>
                            <svg viewBox="0 0 24 24" className="projects-page__button--icon-1" style={{ margin: "0 0 -6.5px 2px", transform: 'rotate(90deg)' }}>
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </div>
                    </li>
                    <li className="projects-page__item--list-item">
                        <div>
                            <div className="projects-page__item--list-item__heading">Certification: React Development</div>
                            <a href='/Certificate-React.pdf' download="rozhalovsky/react.pdf" className='projects-page__button-hidden--item'>Download
                                <svg viewBox="0 0 24 24" className="projects-page__button--icon-1" style={{ margin: "0 0 -6.5px 2px", transform: 'rotate(90deg)' }}>
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </li>
                    <li className="projects-page__item--list-item">
                        <div>
                            <div className="projects-page__item--list-item__heading">Certification: Advanced Devops</div>
                            <a href='/devops.pdf' download="rozhalovsky/devops.pdf" className='projects-page__button-hidden--item'>Download
                                <svg viewBox="0 0 24 24" className="projects-page__button--icon-1" style={{ margin: "0 0 -6.5px 2px", transform: 'rotate(90deg)' }}>
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul >
                <Menu />
            </div >
        </>
    );
};

export default certificationsPageContent;