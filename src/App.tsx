import React from 'react'
import InjectionProvider from './contexts/InjectionContext'
import Posts from './features/posts/presentation/pages/Posts'

const App: React.FC = () => {
	// const logoMoovin =
	// 	'https://cdn.moovin.com.br/project/manager-panel/img/logo-moovin.svg'

	return (
		<InjectionProvider>
			<div>
				{/* <img alt='Logo da Moovin' src={logoMoovin} /> */}
				<Posts />
			</div>
		</InjectionProvider>
	)
}

export default App
