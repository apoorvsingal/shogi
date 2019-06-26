import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'

class Index extends React.Component {
	state = {}
	constructor(props:object){
		super(props)
	}
	render(): [JSX, JSX]{
		return [
			<Head>
				<title>HaHaHa</title>
				<script src='https://github.com/processing/p5.js/releases/download/0.8.0/p5.min.js'></script>
			</Head>,
			<Layout>
				{/*everything goes here*/}
			</Layout>
		]
	}
	componentDidMount():void{
		const canvas = new window["p5"](this.sketch)
	}
	sketch(context:any){
		context.setup = () => {

		}
		context.draw = () => {

		}
	}
}

export default Index