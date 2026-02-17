import { FEATURES } from '../data/features';

function Features() {
    return (
        <section className="features" id="features" aria-labelledby="features-title">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">核心功能</span>
                    <h2 id="features-title" className="section-header__title">
                        一個平台，解決所有銷售挑戰
                    </h2>
                    <p className="section-header__desc">
                        從管線管理到數據分析，SalesPilot 涵蓋業務團隊日常所需的每一項功能。
                    </p>
                </div>

                <div className="features__grid" role="list">
                    {FEATURES.map((feature) => (
                        <article
                            key={feature.id}
                            className="features__card"
                            role="listitem"
                        >
                            <div className="features__icon" aria-hidden="true">
                                {feature.icon}
                            </div>
                            <h3 className="features__title">{feature.title}</h3>
                            <p className="features__desc">{feature.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
