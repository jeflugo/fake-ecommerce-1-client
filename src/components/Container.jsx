export default function Container({ children, cName }) {
	return <div className={`mx-auto w-10/12 ${cName && cName}`}>{children}</div>
}
