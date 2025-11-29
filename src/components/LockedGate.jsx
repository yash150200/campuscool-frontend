// client/src/components/LockedGate.jsx
import React, { useEffect, useState } from "react";
import { getLocks } from "../lib/locksApi";

const LOCK_PASSWORD = "yash";

/**
 * Wrap any protected page:
 * <LockedGate pageKey="feed"><FeedContent/></LockedGate>
 */
export default function LockedGate({ pageKey, children }) {
  const storageKey = `page-unlocked-${pageKey}`;
  const [checking, setChecking] = useState(true);
  const [locked, setLocked] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const previously = sessionStorage.getItem(storageKey);
        if (previously === "true") {
          setUnlocked(true);
        }
        const locks = await getLocks();
        if (!cancel) {
          setLocked(!!locks[pageKey]);
          setChecking(false);
        }
      } catch (e) {
        if (!cancel) {
          setError("Unable to verify lock. Try reloading.");
          setChecking(false);
        }
      }
    })();
    return () => { cancel = true; };
  }, [pageKey, storageKey]);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (input === LOCK_PASSWORD) {
      sessionStorage.setItem(storageKey, "true");
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (checking) {
    return (
      <div className="gate-center">
        <div className="gate-card">Checking access…</div>
      </div>
    );
  }

  if (locked && !unlocked) {
    return (
      <div className="gate-center">
        <div className="gate-card">
          <h2 className="gate-title">This page is locked</h2>
          <p className="gate-sub">Enter password to continue.</p>
          <form className="gate-form" onSubmit={handleUnlock}>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Password"
              className="gate-input"
            />
            <button type="submit" className="gate-btn">Unlock</button>
          </form>
          {error ? <div className="gate-error">{error}</div> : null}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
