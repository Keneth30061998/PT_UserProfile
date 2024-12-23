import React from 'react'
import './ReloadPrompt.css'

import { useRegisterSW } from 'virtual:pwa-register/react'

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log('SW Registered: ' + r)
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <div className="ReloadPrompt-container">
      { (offlineReady || needRefresh)
        && <div className="ReloadPrompt-toast">
            <div className="ReloadPrompt-message">
              { offlineReady
                ? <span>Web lista para funcionar sin conexion</span>
                : <span>Nuevo contenido disponible, cliek en Actualizar.</span>
              }
            </div>
            { needRefresh && <button className="ReloadPrompt-toast-button" onClick={() => updateServiceWorker(true)}>Recargar</button> }
            <button className="ReloadPrompt-toast-button" onClick={() => close()}>Cerrar</button>
        </div>
      }
    </div>
  )
}

export default ReloadPrompt