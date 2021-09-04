import React from 'react'
import InjectionProvider from '../../../../contexts/InjectionContext'
import PagesProvider from '../../../../contexts/PagesContext';
import Posts from '../../../../features/posts/presentation/pages/Posts'
import Header from '../../widgets/Header';
import { Layout } from './styles';

const App: React.FC = () => {
	return (
		<InjectionProvider>
			<Layout>
				<Header />
				<PagesProvider>
					<Posts />
				</PagesProvider>
			</Layout>
		</InjectionProvider>
	);
}

export default App
