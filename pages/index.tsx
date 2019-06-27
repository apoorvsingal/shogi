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
				<style global jsx>
				{`
					body{
						width: -webkit-fill-available;
						text-align: center;
						vertical-align: middle;
					}
				`}
				</style>
				<div id='game'></div>
			</Layout>
		]
	}
	componentDidMount():void{
		new window.p5(this.sketch)
	}
	sketch(context:any){
		const
			lengthOfAGenericBoard = 3366,
			widthOfAGenericBoard = 3333

		const 
			lengthOfASquareInAGenericBoard = 36,
			widthOfASquareInAGenericBoard = 33

		const
			widthOfCanvas = 95/100*Math.min(window.innerHeight, window.innerWidth),
			lengthOfCanvas = widthOfCanvas*lengthOfAGenericBoard/widthOfAGenericBoard,
			widthOfOneSquare = widthOfCanvas*(widthOfASquareInAGenericBoard/widthOfAGenericBoard),
			lengthOfOneSquare = widthOfCanvas*(lengthOfASquareInAGenericBoard/lengthOfAGenericBoard)

		context.setup = () => {

			context.createCanvas(lengthOfCanvas, widthOfCanvas).parent('game')
			context.background(context.color(202, 164, 114))

			context.stroke('black')
			context.strokeWeight(widthOfCanvas/500)

			for(let i = 0, j = 0; i <= widthOfCanvas+widthOfOneSquare && j <= lengthOfCanvas+lengthOfOneSquare; i+= widthOfOneSquare, j+= lengthOfOneSquare){
				context.line(i, 0, i, widthOfCanvas) //vertical line
				context.line(0, j, widthOfCanvas, j) //horizontal line
			}
		}
		context.draw = () => {

		}
	}
}

export default Index