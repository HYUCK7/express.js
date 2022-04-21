export default function TokenGenerator(userid) {
    try {
        const id = userid
        const token = jwt.sign({
            id
        }, process.env.JWT_SECRET, {
            expiresIn: '1m', //1분
            issuer: '토큰 발급자'
        });
        return token
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({code: 500, message: '서버 에러'});
    }

}