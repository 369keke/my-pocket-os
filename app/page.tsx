"use client";

import { useState } from "react";

const apps = [
  { icon: "💬", name: "聊天", color: "#dceaff" },
    { icon: "👥", name: "通讯录", color: "#d9f8e5" },
      { icon: "📷", name: "相册", color: "#ffe2e8" },
        { icon: "📝", name: "手记", color: "#fff0c9" },
          { icon: "🎵", name: "音乐", color: "#eadfff" },
            { icon: "📅", name: "日历", color: "#ffe0d8" },
              { icon: "🛍️", name: "购物", color: "#ffe7ed" },
                { icon: "⚙️", name: "设置", color: "#e4e5e9" },
                ];

                export default function Home() {
                  const [selected, setSelected] = useState("");

                    return (
                        <main className="phone">
                              <div className="status">
                                      <span>9:41</span>
                                              <span>● ● ●　 Wi-Fi　 ▰</span>
                                                    </div>

                                                          <div className="island">
                                                                  <span>●</span>
                                                                          <span>●</span>
                                                                                </div>

                                                                                      <section className="welcome">
                                                                                              <p>星期六 · 10月31日</p >
                                                                                                      <h1>你好，今天也要开心。</h1>
                                                                                                              <div className="weather">☀️　晴朗的一天</div>
                                                                                                                    </section>

                                                                                                                          <section className="grid">
                                                                                                                                  {apps.map((app) => (
                                                                                                                                            <button
                                                                                                                                                        className="app"
                                                                                                                                                                    key={app.name}
                                                                                                                                                                                onClick={() => setSelected(app.name)}
                                                                                                                                                                                          >
                                                                                                                                                                                                      <div
                                                                                                                                                                                                                    className="appIcon"
                                                                                                                                                                                                                                  style={{ background: app.color }}
                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                            {app.icon}
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                    <span>{app.name}</span>
                                                                                                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                                                                            </section>

                                                                                                                                                                                                                                                                                                                  {selected && (
                                                                                                                                                                                                                                                                                                                          <div className="popup">
                                                                                                                                                                                                                                                                                                                                    <div className="popupCard">
                                                                                                                                                                                                                                                                                                                                                <h2>{selected}</h2>
                                                                                                                                                                                                                                                                                                                                                            <p>这里将成为你的专属应用。</p >
                                                                                                                                                                                                                                                                                                                                                                        <button onClick={() => setSelected("")}>返回桌面</button>
                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                )}

                                                                                                                                                                                                                                                                                                                                                                                                      <footer className="dock">
                                                                                                                                                                                                                                                                                                                                                                                                              <div>📞</div>
                                                                                                                                                                                                                                                                                                                                                                                                                      <div>💬</div>
                                                                                                                                                                                                                                                                                                                                                                                                                              <div>🌐</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                      <div>🎵</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                            </footer>

                                                                                                                                                                                                                                                                                                                                                                                                                                                  <div className="homeBar" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                      </main>
                                                                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                                                                        }