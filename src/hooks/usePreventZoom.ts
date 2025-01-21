import { useCallback, useEffect } from "react";

/**
 * Prevent page scaling, used for mobile pages, need to modify index.html
 */
export const usePreventZoom = () => {
  const preventDefault = useCallback((event: TouchEvent) => {
    if (event.touches?.length > 1) {
      event.preventDefault();
    }
  }, []);

  const preventGesture = useCallback((evetn: Event) => {
    evetn.preventDefault();
  }, []);

  useEffect(() => {
    const options: AddEventListenerOptions = { passive: false };
    const events: Array<{ type: string; handler: (event: any) => void }> = [
      { type: "touchstart", handler: preventDefault },
      { type: "touchmove", handler: preventDefault },
      { type: "gesturestart", handler: preventGesture },
    ];

    events.forEach(({ type, handler }) => {
      document.addEventListener(type, handler, options);
    });

    return () => {
      events.forEach(({ type, handler }) => {
        document.removeEventListener(type, handler);
      });
    };
  }, []);
};
