function CallToAction() {
    return (
        <section className="cta-banner" id="demo" aria-labelledby="cta-title">
            <div className="cta-banner__bg" aria-hidden="true" />
            <div className="container cta-banner__inner">
                <h2 id="cta-title" className="cta-banner__title">
                    準備好提升你的業務效率了嗎？
                </h2>
                <p className="cta-banner__desc">
                    加入超過 500 家企業的行列，用 SalesPilot 讓你的銷售團隊如虎添翼。14 天免費試用，不需信用卡。
                </p>
                <div className="cta-banner__actions">
                    <a href="#demo" className="btn btn--white btn--lg">
                        立即預約 Demo
                    </a>
                    <a href="#pricing" className="btn btn--outline-white btn--lg">
                        查看方案比較
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
