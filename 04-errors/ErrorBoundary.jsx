import React from "react";

export class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    // логирование: отправить в мониторинг, исключая PII
    console.error("UI Error:", err, info);
  }
  render() {
    return this.state.hasError
      ? this.props.fallback ?? "Упс..."
      : this.props.children;
  }
}
