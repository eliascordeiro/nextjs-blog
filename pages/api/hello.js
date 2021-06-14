export default function handler(req, res) {
    setTimeout( async () => {
        const _res = await fetch('http://127.0.0.1:5000/ola')
        const _posts = await _res.json()
        res.status(200).json({ _posts })
    }, 0)
  
}