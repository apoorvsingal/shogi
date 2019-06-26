import React from 'react'

import Header from './header'
import Footer from './footer'

class Layout extends React.Component{
	state:object = {}
	constructor(props:object){
		super(props)
	}
	render():any{
		return [
			<Header/>,
			<div id='page'>
				{this.props.children}
			</div>,
			<Footer/>
		]
	}
}

export default Layout