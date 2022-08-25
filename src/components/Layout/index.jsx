import React, { useEffect } from "react"
import ContainerLeft from "../ContainerLeft"
import ContainerMain from "../ContainerMain"
import BackToTop from "../BackToTop"
import { ContainerLayout } from "./styles"

export default function Layout() {
    useEffect(() => {
		// Animar ao scroll
        const debounce = function(func, wait, immediate) {
            let timeout
            return function(...args) {
                const context = this
                const later = () => {
                    timeout = null
                    if (!immediate) func.apply(context, args)
                }
                const callNow = immediate && !timeout
                clearTimeout(timeout)
                timeout = setTimeout(later, wait)
                if (callNow) func.apply(context, args)
            }
        }
        
        const target = document.querySelectorAll("[data-animation]")
        const animationClass = "animate"
        
        function animeScroll() {
            const windowTop = window.pageYOffset + ((window.innerHeight * 9) / 10)
            target.forEach((element) => {
                if(windowTop > element.offsetTop) {
                    element.classList.add(animationClass)
                }
                else {
                    element.classList.remove(animationClass)
                }
            })
        }
        
        animeScroll()
        if(target.length) {
            window.addEventListener("scroll", debounce(() => {
                animeScroll()
            }, 10))
        }
		
		// Retirar o endereço dos links internos da URL quando clicado
		const menuItems = document.querySelectorAll("#navbar a[href^='#']")
		menuItems.forEach(item => {
			item.addEventListener("click", event => {
				event.preventDefault()
				const element = event.target
				const id = element.getAttribute("href")
				const toSection = document.querySelector(id).offsetTop
				
				window.scroll(0, toSection)
			})
		})
    }, [])

    return (
        <ContainerLayout>
            <ContainerLeft />
            <ContainerMain />
            <BackToTop />
        </ContainerLayout>
    )
}
