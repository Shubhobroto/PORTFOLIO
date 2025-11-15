// src/components/AnimatedDialog.js
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AnimatedDialog({
  originRect,
  title,
  isOpen,
  onClose,
  children,
  side = "center",
}) {
  const controls = useAnimation();

  const isSmallScreen = window.innerWidth < 768;

  const targetW = isSmallScreen
    ? window.innerWidth - 32 // full width with small margin
    : Math.min(window.innerWidth * 0.66, 920);

  const targetH = isSmallScreen
    ? window.innerHeight - 80 // almost full height
    : Math.min(window.innerHeight * 0.72, 700);

  const targetLeft = isSmallScreen
    ? 16
    : Math.max((window.innerWidth - targetW) / 2, 24);

  const targetTop = isSmallScreen
    ? 40
    : Math.max((window.innerHeight - targetH) / 2, 24);

  async function openAnim() {
    await controls.set({
      left: originRect.left,
      top: originRect.top,
      width: originRect.width,
      height: originRect.height,
      borderRadius: 12,
      boxShadow: "0px 8px 20px rgba(15, 23, 42, 0)",
      opacity: 1,
      pointerEvents: "auto",
    });

    await controls.start({
      left: targetLeft,
      top: targetTop,
      width: targetW,
      height: targetH,
      borderRadius: 14,
      boxShadow: "0px 22px 60px rgba(15,23,42,0.25)",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  }

  async function closeAnim() {
    await controls.start({
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.12, ease: "easeOut" },
    });
    requestAnimationFrame(() => onClose && onClose());
  }

  useEffect(() => {
    if (isOpen) openAnim();
  }, [isOpen]);

  const onOverlayClick = (e) => {
    if (e.target.dataset.overlay === "true") {
      closeAnim();
    }
  };

  if (!originRect) return null;

  return (
    <div
      data-overlay="true"
      onMouseDown={onOverlayClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: "rgba(0,0,0,0.40)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <motion.div
        initial={false}
        animate={controls}
        style={{
          position: "fixed",
          zIndex: 70,
          background: "#fefefe",
          border: "1px solid rgba(0,0,0,0.08)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: 48,
            display: "flex",
            alignItems: "center",
            paddingLeft: 14,
            paddingRight: 14,
            borderBottom: "1px solid rgba(0,0,0,0.07)",
            background: "#1f2937",
            color: "white",
          }}
        >
          <button
            onClick={(ev) => {
              ev.stopPropagation();
              closeAnim();
            }}
            aria-label="close"
            style={{
              width: 14,
              height: 14,
              borderRadius: 14,
              background: "#ff5f57",
              border: "1px solid rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
          />

          <div style={{ flex: 1, textAlign: "center", fontWeight: 600 }}>
            {title}
          </div>

          <div style={{ width: 36 }} />
        </div>

        <div
          style={{
            padding: isSmallScreen ? 14 : 20,
            overflowY: "auto",
            flex: 1,
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
