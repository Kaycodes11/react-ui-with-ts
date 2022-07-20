import React, {useRef} from 'react'
import useIntersectionObserver from "../hooks/useIntersectionObserver";


const Section = (props: { title: string }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, {})
    const isVisible = !!entry?.isIntersecting;

    console.log(`Render Section ${props.title}`, {isVisible})

    return (
        <div
            ref={ref}
            style={{
                minHeight: '100vh',
                display: 'flex',
                border: '1px dashed #000',
                fontSize: '2rem',
            }}
        >
            <div style={{margin: 'auto'}}>{props.title}</div>
        </div>
    )
}

export default Section;
