

const AnimatedMockup = () => {
  return (
    <>
      <style>
        {`
          @keyframes floatUp {
            0%, 100% { transform: rotate(2deg) translateY(0); }
            50% { transform: rotate(2deg) translateY(-10px); }
          }
          @keyframes floatDown {
            0%, 100% { transform: rotate(-5deg) translateY(0); }
            50% { transform: rotate(-5deg) translateY(10px); }
          }
          @keyframes floatNotif {
            0%, 100% { transform: translateY(0) rotate(-1deg); }
            50% { transform: translateY(-8px) rotate(-1deg); }
          }
          @keyframes floatBadge {
            0%, 100% { transform: translateY(0) rotate(1.5deg); }
            50% { transform: translateY(7px) rotate(1.5deg); }
          }
          @keyframes spinRing {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spinRingRev {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes pulseBar {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes shimmer {
            0% { opacity: 0.4; }
            50% { opacity: 0.9; }
            100% { opacity: 0.4; }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes growIn {
            from { width: 0; }
            to { width: 68%; }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2.5rem 1rem",
          minHeight: "520px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h2 className="sr-only">
          Animated UI dashboard mockup with floating cards, notifications, and
          decorative rings
        </h2>

        <div
          style={{
            position: "relative",
            width: "380px",
            height: "380px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border:
                "1px dashed var(--color-border-tertiary, rgba(255,255,255,0.2))",
              animation: "spinRing 24s linear infinite",
              pointerEvents: "none",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              inset: "-20px",
              borderRadius: "50%",
              border:
                "1px solid var(--color-border-tertiary, rgba(255,255,255,0.1))",
              animation: "spinRingRev 18s linear infinite",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-4px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--color-text-info, #3b82f6)",
                opacity: 0.7,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: "-4px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background:
                  "var(--color-text-secondary, rgba(255,255,255,0.5))",
                opacity: 0.5,
              }}
            ></div>
          </div>

          <div
            style={{
              position: "absolute",
              inset: "48px",
              background:
                "var(--color-background-secondary, rgba(20,20,25,0.8))",
              border:
                "1px solid var(--color-border-tertiary, rgba(255,255,255,0.1))",
              borderRadius: "24px",
              animation: "floatDown 7s ease-in-out infinite",
              backdropFilter: "blur(10px)",
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              inset: "24px",
              background: "var(--color-background-primary, rgba(10,10,12,0.9))",
              border:
                "1px solid var(--color-border-secondary, rgba(255,255,255,0.15))",
              borderRadius: "18px",
              animation: "floatUp 6s ease-in-out infinite",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              backdropFilter: "blur(16px)",
            }}
          >
            <div
              style={{
                height: "38px",
                minHeight: "38px",
                borderBottom:
                  "1px solid var(--color-border-tertiary, rgba(255,255,255,0.1))",
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                gap: "7px",
                background:
                  "var(--color-background-secondary, rgba(255,255,255,0.05))",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ff5f57",
                  opacity: 0.85,
                }}
              ></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#febc2e",
                  opacity: 0.85,
                }}
              ></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#28c840",
                  opacity: 0.85,
                }}
              ></div>
              <div
                style={{
                  flex: 1,
                  marginLeft: "8px",
                  height: "18px",
                  background:
                    "var(--color-background-secondary, rgba(0,0,0,0.2))",
                  border:
                    "1px solid var(--color-border-tertiary, rgba(255,255,255,0.05))",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 10px",
                }}
              >
                <div
                  style={{
                    height: "6px",
                    width: "60%",
                    background:
                      "var(--color-border-secondary, rgba(255,255,255,0.1))",
                    borderRadius: "4px",
                  }}
                ></div>
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    marginLeft: "auto",
                    borderRadius: "50%",
                    border:
                      "1.5px solid var(--color-border-secondary, rgba(255,255,255,0.2))",
                  }}
                ></div>
              </div>
            </div>

            <div
              style={{
                flex: 1,
                padding: "14px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    background:
                      "var(--color-background-info, rgba(59, 130, 246, 0.15))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="ti ti-chart-bar"
                    style={{
                      fontSize: "14px",
                      color: "var(--color-text-info, #3b82f6)",
                    }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      height: "8px",
                      width: "55%",
                      background:
                        "var(--color-border-secondary, rgba(255,255,255,0.15))",
                      borderRadius: "4px",
                      marginBottom: "5px",
                      animation: "shimmer 3s ease-in-out infinite",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "6px",
                      width: "35%",
                      background:
                        "var(--color-border-tertiary, rgba(255,255,255,0.05))",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--color-text-success, #10b981)",
                    fontWeight: 500,
                  }}
                >
                  ↑ 12%
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    background:
                      "var(--color-background-secondary, rgba(255,255,255,0.03))",
                    border:
                      "1px solid var(--color-border-tertiary, rgba(255,255,255,0.05))",
                    borderRadius: "10px",
                    padding: "8px",
                  }}
                >
                  <div
                    style={{
                      height: "5px",
                      width: "70%",
                      background:
                        "var(--color-border-secondary, rgba(255,255,255,0.1))",
                      borderRadius: "3px",
                      marginBottom: "6px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "16px",
                      width: "50%",
                      background:
                        "var(--color-border-secondary, rgba(255,255,255,0.1))",
                      borderRadius: "4px",
                      animation: "shimmer 2.5s ease-in-out infinite",
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    background:
                      "var(--color-background-info, rgba(59, 130, 246, 0.1))",
                    border:
                      "1px solid var(--color-border-info, rgba(59, 130, 246, 0.2))",
                    borderRadius: "10px",
                    padding: "8px",
                  }}
                >
                  <div
                    style={{
                      height: "5px",
                      width: "70%",
                      background:
                        "var(--color-border-info, rgba(59, 130, 246, 0.2))",
                      borderRadius: "3px",
                      marginBottom: "6px",
                      opacity: 0.5,
                    }}
                  ></div>
                  <div
                    style={{
                      height: "16px",
                      width: "50%",
                      background: "var(--color-text-info, #3b82f6)",
                      borderRadius: "4px",
                      opacity: 0.25,
                      animation: "shimmer 2s ease-in-out infinite 0.3s",
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    background:
                      "var(--color-background-secondary, rgba(255,255,255,0.03))",
                    border:
                      "1px solid var(--color-border-tertiary, rgba(255,255,255,0.05))",
                    borderRadius: "10px",
                    padding: "8px",
                  }}
                >
                  <div
                    style={{
                      height: "5px",
                      width: "70%",
                      background:
                        "var(--color-border-secondary, rgba(255,255,255,0.1))",
                      borderRadius: "3px",
                      marginBottom: "6px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "16px",
                      width: "50%",
                      background:
                        "var(--color-border-secondary, rgba(255,255,255,0.1))",
                      borderRadius: "4px",
                      animation: "shimmer 3.5s ease-in-out infinite 0.6s",
                    }}
                  ></div>
                </div>
              </div>

              <div
                style={{
                  background:
                    "var(--color-background-secondary, rgba(255,255,255,0.03))",
                  border:
                    "1px solid var(--color-border-tertiary, rgba(255,255,255,0.05))",
                  borderRadius: "10px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      height: "5px",
                      flex: 1,
                      background:
                        "var(--color-border-tertiary, rgba(255,255,255,0.1))",
                      borderRadius: "99px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        background: "var(--color-text-info, #3b82f6)",
                        borderRadius: "99px",
                        animation:
                          "growIn 2s ease-out forwards, pulseBar 3s ease-in-out infinite 2s",
                        width: 0,
                      }}
                    ></div>
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      color:
                        "var(--color-text-secondary, rgba(255,255,255,0.5))",
                      minWidth: "24px",
                    }}
                  >
                    68%
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      height: "5px",
                      flex: 1,
                      background:
                        "var(--color-border-tertiary, rgba(255,255,255,0.1))",
                      borderRadius: "99px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "42%",
                        background: "var(--color-text-success, #10b981)",
                        borderRadius: "99px",
                        animation: "pulseBar 4s ease-in-out infinite 0.5s",
                      }}
                    ></div>
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      color:
                        "var(--color-text-secondary, rgba(255,255,255,0.5))",
                      minWidth: "24px",
                    }}
                  >
                    42%
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "auto",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background:
                      "var(--color-background-info, rgba(59, 130, 246, 0.2))",
                  }}
                ></div>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background:
                      "var(--color-background-success, rgba(16, 185, 129, 0.2))",
                    marginLeft: "-8px",
                  }}
                ></div>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background:
                      "var(--color-background-secondary, rgba(255,255,255,0.1))",
                    border:
                      "1px dashed var(--color-border-secondary, rgba(255,255,255,0.2))",
                    marginLeft: "-8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "8px",
                      color:
                        "var(--color-text-secondary, rgba(255,255,255,0.7))",
                    }}
                  >
                    +3
                  </span>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    height: "22px",
                    padding: "0 10px",
                    background:
                      "var(--color-background-info, rgba(59, 130, 246, 0.15))",
                    border:
                      "1px solid var(--color-border-info, rgba(59, 130, 246, 0.3))",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      color: "var(--color-text-info, #3b82f6)",
                      fontWeight: 500,
                    }}
                  >
                    Review
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              right: "-68px",
              top: "40px",
              width: "150px",
              background:
                "var(--color-background-primary, rgba(15,15,20,0.95))",
              border:
                "1px solid var(--color-border-secondary, rgba(255,255,255,0.15))",
              borderRadius: "14px",
              padding: "12px",
              animation: "floatNotif 5s ease-in-out infinite 0.4s",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              zIndex: 10,
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background:
                    "var(--color-background-success, rgba(16, 185, 129, 0.15))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <i
                  className="ti ti-check"
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-success, #10b981)",
                  }}
                  aria-hidden="true"
                ></i>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    height: "6px",
                    width: "80%",
                    background:
                      "var(--color-border-secondary, rgba(255,255,255,0.2))",
                    borderRadius: "3px",
                    marginBottom: "4px",
                    animation: "shimmer 3s ease-in-out infinite",
                  }}
                ></div>
                <div
                  style={{
                    height: "5px",
                    width: "55%",
                    background:
                      "var(--color-border-tertiary, rgba(255,255,255,0.1))",
                    borderRadius: "3px",
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                height: "1px",
                background:
                  "var(--color-border-tertiary, rgba(255,255,255,0.1))",
              }}
            ></div>
            <div
              style={{
                fontSize: "10px",
                color: "var(--color-text-success, #10b981)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--color-text-success, #10b981)",
                  animation: "blink 1.5s ease-in-out infinite",
                }}
              ></div>
              Live · just now
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              left: "-64px",
              bottom: "60px",
              width: "136px",
              background:
                "var(--color-background-primary, rgba(15,15,20,0.95))",
              border:
                "1px solid var(--color-border-secondary, rgba(255,255,255,0.15))",
              borderRadius: "14px",
              padding: "12px",
              animation: "floatBadge 6.5s ease-in-out infinite 1s",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              zIndex: 10,
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background:
                    "var(--color-background-info, rgba(59, 130, 246, 0.15))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <i
                  className="ti ti-user"
                  style={{
                    fontSize: "15px",
                    color: "var(--color-text-info, #3b82f6)",
                  }}
                  aria-hidden="true"
                ></i>
              </div>
              <div>
                <div
                  style={{
                    height: "6px",
                    width: "60px",
                    background:
                      "var(--color-border-secondary, rgba(255,255,255,0.2))",
                    borderRadius: "3px",
                    marginBottom: "4px",
                  }}
                ></div>
                <div
                  style={{
                    height: "5px",
                    width: "40px",
                    background:
                      "var(--color-border-tertiary, rgba(255,255,255,0.1))",
                    borderRadius: "3px",
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                height: "5px",
                background:
                  "var(--color-border-tertiary, rgba(255,255,255,0.1))",
                borderRadius: "99px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "75%",
                  background: "var(--color-text-info, #3b82f6)",
                  borderRadius: "99px",
                  animation: "pulseBar 3.5s ease-in-out infinite",
                }}
              ></div>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <div
                style={{
                  flex: 1,
                  height: "20px",
                  background:
                    "var(--color-background-info, rgba(59, 130, 246, 0.1))",
                  border:
                    "1px solid var(--color-border-info, rgba(59, 130, 246, 0.2))",
                  borderRadius: "6px",
                }}
              ></div>
              <div
                style={{
                  flex: 1,
                  height: "20px",
                  background:
                    "var(--color-background-secondary, rgba(255,255,255,0.05))",
                  border:
                    "1px solid var(--color-border-tertiary, rgba(255,255,255,0.1))",
                  borderRadius: "6px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedMockup;
