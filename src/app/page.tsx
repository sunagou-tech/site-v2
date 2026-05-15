export default function Home() {
  return (
    <main className="luna-site" id="top">
      <header className="luna-header">
        <a className="luna-brand" href="#top" aria-label="合同会社ルナマーケティング">
          <span className="luna-brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>
            <strong>合同会社ルナマーケティング</strong>
            <small>Luna Marketing LLC</small>
          </span>
        </a>
        <nav className="luna-nav" aria-label="主要ナビゲーション">
          <a href="#services">事業内容</a>
          <a href="#proof">実績</a>
          <a href="#company">会社概要</a>
          <a href="#contact">お問い合わせ</a>
        </nav>
      </header>

      <section className="luna-hero">
        <div className="luna-hero-copy">
          <p className="luna-eyebrow">合同会社ルナマーケティング</p>
          <h1>
            生成AIを活用したマーケティング支援で
            <br />
            ビジネスの成長を加速します
          </h1>
          <p className="luna-lead">
            合同会社ルナマーケティングは、AI活用、オンライン講座制作、SNS発信導線の整備を通じて、
            個人事業主・スモールビジネスの集客と業務改善を支援しています。
          </p>
          <div className="luna-hero-actions">
            <a className="luna-button luna-primary" href="#contact">
              お問い合わせ
            </a>
          </div>
        </div>
        <div className="luna-hero-visual" aria-label="オンライン支援の活動風景">
          <img src="/luna/consulting.jpg" alt="オンラインマーケティング支援のイメージ" />
          <div className="luna-hero-panel">
            <strong>法人設立</strong>
            <span>2025年4月10日</span>
          </div>
        </div>
      </section>

      <section className="luna-trust-strip" aria-label="事業実績">
        <div>
          <strong>2,000名以上</strong>
          <span>Udemy受講生</span>
        </div>
        <div>
          <strong>700名</strong>
          <span>メルマガ読者</span>
        </div>
        <div>
          <strong>複数媒体</strong>
          <span>SNS・講座・メールで継続発信</span>
        </div>
      </section>

      <section id="services" className="luna-section">
        <div className="luna-section-head">
          <p className="luna-eyebrow">Services</p>
          <h2>事業内容</h2>
          <p>商品設計から集客、販売導線、継続サポートまで、オンライン上で完結する実務支援を行っています。</p>
        </div>
        <div className="luna-service-grid">
          <article className="luna-service-card">
            <img src="/luna/analytics.jpg" alt="データ分析とマーケティング設計" />
            <div>
              <span className="luna-tag">AI活用</span>
              <h3>AI導入支援・業務改善サポート</h3>
              <p>
                生成AIを使ったコンテンツ制作、顧客対応、業務整理を支援。
                小規模事業者が無理なくAIを取り入れられる運用設計まで伴走します。
              </p>
            </div>
          </article>
          <article className="luna-service-card">
            <img src="/luna/online-learning.jpg" alt="オンライン講座制作のイメージ" />
            <div>
              <span className="luna-tag">講座制作</span>
              <h3>Udemy講座 制作・販売サポート</h3>
              <p>
                企画立案、撮影準備、販売ページ設計、プロモーションを支援。
                自社でも2,000名超の受講実績をもとに実践的に伴走します。
              </p>
            </div>
          </article>
          <article className="luna-service-card">
            <img src="/luna/workspace.jpg" alt="SNS発信と顧客対応のイメージ" />
            <div>
              <span className="luna-tag">集客支援</span>
              <h3>SNS発信・集客コンサルティング</h3>
              <p>
                X、LINE公式アカウント、メルマガ、noteを活用し、
                個人起業家が安定的に見込み客と接点を持てる体制を整えます。
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="proof" className="luna-section luna-proof">
        <div className="luna-section-head">
          <p className="luna-eyebrow">Activity</p>
          <h2>活動実態と運営体制</h2>
          <p>オンライン講座、個別コンサルティング、SNS発信を継続して行い、実務に根ざした支援体制を整えています。</p>
        </div>
        <div className="luna-proof-layout">
          <div className="luna-proof-copy">
            <h3>継続性のあるオンライン完結型ビジネス</h3>
            <p>
              Zoom、LINE、メール、講座プラットフォームを活用して、オンラインで相談・講座制作・集客支援を行っています。
              顧客との打ち合わせ、制作進行、改善提案までを継続的に実施しています。
            </p>
            <ul className="luna-check-list">
              <li>Udemy受講生2,000名以上の教育実績</li>
              <li>Xフォロワー2,000名、noteフォロワー850名の発信基盤</li>
              <li>LINE公式アカウント、メルマガを活用した継続的な顧客接点</li>
            </ul>
          </div>
          <figure className="luna-site-preview">
            <img src="/luna/online-learning.jpg" alt="Zoomやオンライン講座を通じた支援活動のイメージ" />
            <figcaption>オンライン講座・個別相談・打ち合わせを中心に活動</figcaption>
          </figure>
        </div>
      </section>

      <section id="company" className="luna-section luna-company">
        <div className="luna-section-head">
          <p className="luna-eyebrow">Company</p>
          <h2>会社概要</h2>
        </div>
        <dl className="luna-company-table">
          <div>
            <dt>商号</dt>
            <dd>合同会社ルナマーケティング</dd>
          </div>
          <div>
            <dt>代表社員</dt>
            <dd>菊地 啓太</dd>
          </div>
          <div>
            <dt>設立</dt>
            <dd>2025年4月10日</dd>
          </div>
          <div>
            <dt>資本金</dt>
            <dd>1円</dd>
          </div>
          <div>
            <dt>所在地</dt>
            <dd>埼玉県所沢市並木7丁目1番地3-403</dd>
          </div>
          <div>
            <dt>電話番号</dt>
            <dd>
              <a href="tel:05017206408">050-1720-6408</a>
            </dd>
          </div>
          <div>
            <dt>事業内容</dt>
            <dd>AI導入支援、SNS集客支援、オンライン講座制作支援、デジタルマーケティング支援</dd>
          </div>
          <div>
            <dt>Webサイト</dt>
            <dd>
              <a href="https://lunaceo.online/">https://lunaceo.online/</a>
            </dd>
          </div>
        </dl>
      </section>

      <footer id="contact" className="luna-footer">
        <div>
          <p className="luna-eyebrow">Contact</p>
          <h2>お問い合わせ</h2>
          <p>AI導入支援、講座制作、SNS集客支援に関するご相談は、下記フォームまたはお電話よりお問い合わせください。</p>
          <a className="luna-phone" href="tel:05017206408">
            050-1720-6408
          </a>
        </div>
        <form className="luna-contact-form" action="#" method="post" aria-label="お問い合わせフォーム">
          <label>
            お名前
            <input type="text" name="name" autoComplete="name" />
          </label>
          <label>
            メールアドレス
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            お問い合わせ内容
            <textarea name="message" rows={5} />
          </label>
          <button className="luna-button luna-footer-button" type="submit">
            送信する
          </button>
        </form>
        <small>© 2026 Luna Marketing LLC.</small>
      </footer>
    </main>
  );
}
