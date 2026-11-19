import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { createPortal } from 'react-dom';

const CursorEffects = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const pointerX = useMotionValue(-40);
  const pointerY = useMotionValue(-40);
  const coreX = useSpring(pointerX, { stiffness: 1100, damping: 42, mass: 0.12 });
  const coreY = useSpring(pointerY, { stiffness: 1100, damping: 42, mass: 0.12 });
  const trailX = useSpring(pointerX, { stiffness: 230, damping: 28, mass: 0.25 });
  const trailY = useSpring(pointerY, { stiffness: 230, damping: 28, mass: 0.25 });

  useEffect(() => {
    const media = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    );
    const updatePointerMode = () => setEnabled(media.matches);

    updatePointerMode();
    media.addEventListener('change', updatePointerMode);
    return () => media.removeEventListener('change', updatePointerMode);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      const target = event.target;
      const element = target instanceof Element ? target : null;
      const isTextEntry = Boolean(
        element?.closest('input, textarea, [contenteditable="true"], [cmdk-input-wrapper]'),
      );
      setVisible(!isTextEntry);
      setInteractive(
        !isTextEntry &&
          Boolean(element?.closest('a, button, [cmdk-item], [role="button"]')),
      );
    };
    const handlePointerDown = () => setPressed(true);
    const handlePointerUp = () => setPressed(false);
    const hideCursor = () => {
      setVisible(false);
      setPressed(false);
    };
    const handlePointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) hideCursor();
    };

    document.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('pointerout', handlePointerOut, { passive: true });
    window.addEventListener('blur', hideCursor);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointerout', handlePointerOut);
      window.removeEventListener('blur', hideCursor);
    };
  }, [enabled, pointerX, pointerY]);

  if (!enabled) return null;

  return createPortal(
    <div className="cursor-layer" aria-hidden="true">
      <motion.span
        className="cursor-trail"
        style={{ x: trailX, y: trailY }}
        animate={{ opacity: visible ? 1 : 0, scale: interactive ? 1.55 : 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      />
      <motion.span
        className="cursor-core"
        style={{ x: coreX, y: coreY }}
        animate={{ opacity: visible ? 1 : 0, scale: pressed ? 0.68 : interactive ? 1.25 : 1 }}
        transition={{ type: 'spring', stiffness: 650, damping: 30 }}
      />
    </div>,
    document.body,
  );
};

export default CursorEffects;
