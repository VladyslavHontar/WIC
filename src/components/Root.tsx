import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { ErrorBoundary } from './ErrorBoundary';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { publicUrl } from '@/helpers/publicUrl';

function ErrorBoundaryError({ error }: { error: unknown }) {
    console.error('Root error:', error);

    return (
        <div>
            <p>An unhandled error occurred:</p>
            <pre>
        {error instanceof Error
            ? error.message
            : typeof error === 'string'
                ? error
                : JSON.stringify(error)}
      </pre>
        </div>
    );
}

export function Root() {
    return (
        <ErrorBoundary fallback={ErrorBoundaryError}>
            <TonConnectUIProvider manifestUrl={publicUrl('tonconnect-manifest.json')}>
                <HashRouter>
                    <App />
                </HashRouter>
            </TonConnectUIProvider>
        </ErrorBoundary>
    );
}
