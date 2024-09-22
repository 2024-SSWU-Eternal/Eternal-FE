import React, { useMemo } from 'react';
import Btn from '../../assets/img/foodinfo/icon_back.png';
import { useNavigate, useParams } from 'react-router-dom'

const BoothDetail = () => {
    const booths = [
        {
            id: 1,
            name: 'OCOT',
            date: [3, 6],
            image: require('../../assets/img/booth/OCOT.avif'),
            location: 'F-2',
            filter: '학생 부스',
            description: ["☕️OUR CUPS OF TEA🏠 우리의 감성을 담은 소품을 소개합니다!", "매일 사용하는 소품에 따뜻한 마음을 담아 정성껏 만들었습니다. OCOT와 함께 일상에 작은 즐거움을 더해보세요. 우리의 감성이 당신의 취향과 통하길 바라며..."],
            item: ["레진 폰케이스, 레진 그립톡, 아크릴&레진 키링, 비즈 반지&팔찌"]
        },
        {
            id: 2,
            name: '뜨개 만물상',
            date: [3, 6],
            image: require('../../assets/img/booth/뜨개만물상.avif'),
            location: 'F-3',
            filter: '학생 부스',
            description: ["실과 바늘만 있다면 어디든 갈 수 있어..☆ 연금술사 수정이들의 '뜨개만물상'에 오신 여러분을 환영합니다🙌🏻 뜨개질로 무엇이든 만들어낸다는 의미의 '뜨개만물상'!😊티코스터, 인형, 키링, 수세미까지!! 이리 와서 구경만 해봐유~ "],
            item: ["뜨개 가방, 뜨개 키링, 뜨개 티코스터, 비즈팔찌, 수세미 "],
        },
        {
            id: 3,
            name: 'S’angle 사진관',
            date: [3, 6],
            image: require('../../assets/img/booth/S_angle 사진관.avif'),
            location: 'E-2',
            filter: '학생 부스',
            description: [" 추억을 담는 <쌩글 사진관>", "저희 부스를 체험하며 축제의 추억을 잘 담을 수 있는 활동을 준비했습니다. 매일 지나가는 순간을 사진으로 담아보세요."],
            item: [" 판매 : 풍경, 스마트톡, 엽서, 책갈피, 스티커, 랜덤 폴라로이드팩, 2024 달력 포스터", "체험: 슬라이드 키링 제작, 스냅 촬영 및 인화, 폴라로이드 촬영"],
        },
        {
            id: 4,
            name: '성신 최고 上여자 올림픽',
            date: [3, 6],
            image: require('../../assets/img/booth/성신최고上여자올림픽.avif'),
            location: 'E-1',
            filter: '학생 부스',
            description: [" -성신 최고 上여자 올림픽-", "우리 사회에서 여성으로서 살아가면서 겪는 다양한 어려움들을 상징하는 이 높이를 함께 뛰어넘으며 서로를 응원합시다! 가장 높이 뛴 上여자에게는 소정의 상품을 증정할 예정입니다. 밈 티셔츠와 스티커도 판매 중이니 많은 참여 부탁드립니다! "],
            item: ["티셔츠, 스티커 "],
        },
        {
            id: 5,
            name: '전력★메탈연구소!!~  모두가 메탈의 사랑스러움을 알 때까지~',
            date: [3, 6],
            image: require('../../assets/img/booth/메탈연구소.avif'),
            location: 'E-6',
            filter: '학생 부스',
            description: ["[ 전략★메탈 연구소!! ]", "모두가 메탈의 사랑스러움을 모두가 알 때까지 멈추지 않을 메탈콤플렉스입니다 ミ★",

                "메탈 연구소에는, 락스타의 영혼을 가득 담은 티셔츠, 키링, 스티커 등 다양한 문구류뿐만 아니라 나만의 애착 기타 뽑기, 락스타 심리테스트 체험도 준비되어 있습니다!",

                "우리 함께 메탈의 귀여움과 사랑스러움을 느껴보자구! ☆〜（ゝ。∂）",

                "Ps. 피곤해 보이는 수정이를 위해..^^*",
                "┏━━━━━━┓",
                "┃┼ 메탈파워 ┼ ┃",
                "┗━━━━━━┛",
            ],
            item: ["티셔츠, 스티커, 엽서, 포토카드, 키링, 일회용 밴드, 캔뱃지, 목걸이,캡슐뽑기(체험), 락스타 심리테스트(체험) "],
        },
        {
            id: 6,
            name: '단아의 이면',
            date: [3, 6],
            image: require('../../assets/img/booth/단아의 이면.avif'),
            location: 'E-9',
            filter: '학생 부스',
            description: [" 단아하면서 화려한것들을 만들어요. 자투리 천을 활용한 에어팟 케이스, 다이어리 케이스부터 자수정 키링, 단아의 엽서등을 만나볼 수있습니다!"],
            item: " ",
        },
        {
            id: 7,
            name: 'OMR (Oh My Ribbon)',
            date: [3, 6],
            image: require('../../assets/img/booth/OMR.avif'),
            location: 'F-4',
            filter: '학생 부스',
            description: [" - OMR (Oh My Ribbon): OH MY RIBBON! -",
                "졸업을 앞둔 섬유 공예과 4학년의 핸드메이드 상품을 판매하는 부스 'OMR (Oh My Ribbon)'입니다!",
                "다시 태어남, Re: Born의 유사한 소리를 내는 Ribbon을 유쾌하게 풀어낸 Oh my RIBBON!을 이번 대동제에서 선보이게 되었습니다.",
                "제품은 직조 티코스터, 그립톡, 스크런지, 티셔츠, 파우치, 스티커가 준비되어 있고, 일상 속에서 편리하게 쓸 수 있으면서도 단 하나뿐인 디자인 핸드메이드 상품을 만나보세요!"],
            item: ["티셔츠,파우치,스크런치,키링,티코스터,그립톡,스티커 "],
        },
        {
            id: 8,
            name: 'tomorrow is__',
            date: [1, 6],
            image: require('../../assets/img/booth/tomorrow is.avif'),
            location: 'F-6',
            filter: '학생 부스',
            description: [' "니트의 감성에 힙함을 더하다,"'],
            item: ["에어팟 케이스, 애플워치 스트랩, 핸드워머, 키링, 니삭스 "],
        },
        {
            id: 9,
            name: '물만난 물고기',
            date: [1, 4],
            image: require('../../assets/img/booth/물만난 물고기.avif'),
            location: 'F-1',
            filter: '학생 부스',
            description: ["- 물만난 물고기처럼 세상을 재밌게 헤엄치자! -",
                "자수정 원석을 사용한 목걸이, 팔찌부터~ 깜찍한 수룡이 키링까지!",
                "그리고 뜨개로 만들어진 물고기, 네잎클로버, 버섯 키링에 * 귀여운 파우치도!",
                "정해진 장르없이 일단 헤엄치고 보는 잡화점, 물만난 물고기로 구경오세요! "],
            item: ["자수정 원석 목걸이, 원석 팔찌, 수룡이 키링, 지비츠, 뜨개 키링, 뜨개 파우치, 비즈키링, 스쿠비두 매듭 키링 kit  "],
        },
        {
            id: 10,
            name: 'Thirsty soul',
            date: [2, 5],
            image: require('../../assets/img/booth/Thirsty Soul.avif'),
            location: 'F-1',
            filter: '학생 부스',
            description: ["'Please give me more rock...' ",

                "목마른 영혼들이 수정대동제 <Eternal>에 찾아왔다! ",
                "락밴드 동아리 Thirsty Soul만의 독특한 개성이 담긴 굿즈들을 만나보세요."],
            item: ["티셔츠, 타투스티커, 밀크글라스"],

        },
        {
            id: 11,
            name: '몽키스패너',
            date: [1, 4],
            image: require('../../assets/img/booth/몽키스패너.avif'),
            location: 'E-7',
            filter: '학생 부스',
            description: ["혹시 귀여운 거 좋아하세요? 한땀한땀 수제 오므라이스 키링부터 진주 담은 은조개 목걸이, 오밀조밀 뱃지까지! 금속공예 3학년들이 개성과 애정을 담아 직접 만든 제품들을 만나보세요! "],
            item: ["목걸이,뱃지,키링,파우치"],

        },
        {
            id: 12,
            name: '랟스보스와 함께 ReSET! 디지털 성범죄 없는 세상',
            date: [2, 5],
            image: require('../../assets/img/booth/랟스보스.avif'),
            location: 'E-7',
            filter: '학생 부스',
            description: ["ReSET과 함께하는 딥페이크 성착취 근절 캠페인"],
            item: ["잡지(간행물), 스티커, 라이터, 컵, 타투스티커"],
        },
        {
            id: 13,
            name: '모루모루',
            date: [1, 4],
            image: require('../../assets/img/booth/모루모루.avif'),
            location: 'F-7',
            filter: '학생 부스',
            description: [" 가을의 낭만을 담은 소품들로 계절의 변화를 만끽해보세요* ੈ✩. 독서의 즐거움을 더해줄 특별한 책갈피부터, 가을 분위기를 더해줄 다양한 키링, 그리고 포근한 감성의 모루인형까지! 이번 가을, 모루모루에서 일상의 작은 순간에 낭만을 더해보세요🍂"],
            item: ["모루 키링, 아크릴 키링, 북마크 "],
        },
        {
            id: 14,
            name: '돌팔이',
            date: [2, 5],
            image: require('../../assets/img/booth/돌팔이.avif'),
            location: 'F-7',
            filter: '학생 부스',
            description: ["Literally 돌팔이! Just be a rock!", "K장녀 돌, 여자만 수호하는 돌 등 '여성을 위한' "],
            item: ["돌"],
        },
        {
            id: 15,
            name: '수정이네 과일가게',
            date: [1, 4],
            image: require('../../assets/img/booth/수정이네 과일가게.avif'),
            location: 'E-5',
            filter: '학생 부스',
            description: ["지금까지 이런 도자 소품은 없었다. 이것은 과일인가, 도자인가? 어서 오세요! 수정이네 과일가게입니다! 도자 공예과 2학년들이 기획한 세상에서 가장 아기자기한 '도자 소품샵'! '액세서리(목걸이, 반지)/키링/뱃지와 마그넷'으로 다양한 상품과 깨알 귀여운 이벤트도 함께 수정이들에게 찾아갈 예정이니 많이 찾아와주세요! "],
            item: ["마그넷, 목걸이, 반지, 뱃지, 키링"],
        },
        {
            id: 16,
            name: '융보공(融保工)',
            date: [2, 5],
            image: require('../../assets/img/booth/융보공.avif'),
            location: 'E-5',
            filter: '학생 부스',
            description: ["안녕하세요, 여러분! 암호와 비밀의 세계에 오신 것을 환영합니다. 저희는 암호 퀴즈를 진행하는 부스 융보공 입니다. 여기는 여러분의 문제 해결 능력과 논리적 사고를 시험할 수 있는 다양한 암호 퀴즈들이 준비되어 있습니다.",

                "성공적인 퀴즈 풀이를 기원하며, 많은 참여 부탁드립니다!  "],
            item: "  ",
        },
        {
            id: 17,
            name: '위시노바',
            date: [3],
            image: require('../../assets/img/booth/위시노바.avif'),
            location: 'E-10',
            filter: '학생 부스',
            description: [" Wishnova-! ‘소원’을 뜻하는 영어 wish와 ‘신성(새로운 별)’을 뜻하는 라틴어 nova를 합쳐 만든 단어로 [소원별]이라는 뜻이며 별에게 소원을 비는 행동을 바탕으로 지어졌습니다. 별을 비롯한 다양하고 귀여운 핸드메이드 뜨개제품을 통해 여러분이 행복해지길 바라며..."],
            item: ["뜨개 키링, 뜨개 소품, 스티커, 럭키드로우"],
        },
        {
            id: 18,
            name: '돌잔!치 (Rock Glass Festival)',
            date: [6],
            image: require('../../assets/img/booth/돌잔치.avif'),
            location: 'E-10',
            filter: '학생 부스',
            description: ["  돌들의 잔치에 여러분을 초대합니다! 락스타 티셔츠와 반창고 그리고 다양한 굿즈들까지! 여러분이 찾던 라인업으로 채워진 락페스티벌에 함께해 주세요! "],
            item: "티셔츠, 기타 피크, 반창고, 밈스티커, 락스타 키링 등",
        },
        {
            id: 19,
            name: '잊혀진 현상소',
            date: [3],
            image: require('../../assets/img/booth/잊혀진-현상소.avif'),
            location: 'E-4',
            filter: '학생 부스',
            description: ["일상속에서  실용적으로 사용할 수 있는 ",
                "다양한 사진 굿즈들을 구성하여,",
                "가을을 맞이한 수정이분들께 ",
                "저희가 모아 둔 여름의 조각들을 선물합니다. "],
            item: ["엽서, 스티커, 메모지, 마스킹 테이프, 틴케이스, 면파우치, 포토북, 패브릭 포스터 "],
        },
        {
            id: 20,
            name: '뜨개팔자 상팔자',
            date: [2, 5],
            image: require('../../assets/img/booth/뜨개팔자 상팔자.avif'),
            location: 'E-4 F-6',
            filter: '학생 부스',
            description: ["  "],
            item: "  ",
        },
        {
            id: 21,
            name: '蠑光:영원한 빛',
            date: [1],
            image: require('../../assets/img/booth/영원한-빛.avif'),
            location: 'E-3',
            filter: '학생 부스',
            description: ["영원한 빛이 만들어 판매할 주얼리는 수정이들에게 20대의 풋풋하고 반짝이던 한 날의 추억을 간직할 수 있는 하나의 매개체가 되어 스스로 간직하거나 소중한 이에게 선물하며 영원히 수정이들 곁에 머무를 수 있는 주얼리를 선물합니다. 모든 주얼리를 손으로 직접 만들었고 세상에 하나뿐인 주얼리도 있으니 구경하고 가세요~ "],
            item: "실버 주얼리(반지, 목걸이, 이어커프 등), 키링 ",
        },
        {
            id: 22,
            name: '딱따구리 잡화점',
            date: [1],
            image: require('../../assets/img/booth/딱따구리 잡화점.avif'),
            location: 'E-8',
            filter: '학생 부스',
            description: ["귀여운 뜨개 소품들을 딱따구리 잡화점에서 만나보세요! ",
                "뜨개 클로버, 뜨개 푸딩, 토마토 등 다양한 상품과 여러분의 운을 시험해볼 수 있는 럭키드로우 이벤트가 준비되어 있습니다. ",
                "무려 수룡이 인형을 뽑을 수 있다는 사실! 많은 관심 부탁드립니다~! "],
            item: "뜨개 키링, 뜨개 코스터, 뜨개 인형, 스티커 등.",
        },
        {
            id: 23,
            name: '파프리카 잡화점',
            date: [2, 5],
            image: require('../../assets/img/booth/파프리카-잡화점.avif'),
            location: 'E-8 F-8',
            filter: '학생 부스',
            description: ["땅에서 나는 것들을 모두 뜨고 엮었습니다. 귀엽고 다양한 소품들을 수확해 가세요!"],
            item: ["끈갈피, 뜨개 수세미, 뜨개 그립톡, 뜨개 코스터, 뜨개 키링, 뜨개 수룡 인형 "],
        },
        {
            id: 24,
            name: '테소로',
            date: [3, 6],
            image: require('../../assets/img/booth/테소로.avif'),
            location: 'F-5',
            filter: '학생 부스',
            description: ["테소로는 평화로운 가을에 어울리는 몽글몽글한 모루 키링과 개성을 살려 착용하기 좋은 악세서리들을 데려갈 수 있는 부스입니다.100%핸드메이드로 조소과 수정이들의 창의적인 아이디어가 담긴 작품으로 하나하나 정성껏 제작하고 있습니다. 축제의 즐거움 중 하나는 즐거운 분위기 속 플리마켓에서 판매되는 소품과의 운명적 만남이라고 생각합니다. 어디서도 볼 수 없는 독특하고 특색있는 소품들을 낮은 가격과 높은 퀄리티로 준비하여 축제의 즐거움을 더욱 극대화 할 수 있습니다."],
            item: " 키링 목걸이 반지 스티커 엽서 모루인형",
        },
        {
            id: 25,
            name: '찬빛',
            date: [2, 4],
            image: require('../../assets/img/booth/찬빛.avif'),
            location: 'F-8',
            filter: '학생 부스',
            description: ["🎞️✨찬란하고 빛나는 순간을 감다✨📸",

                "필름사진 중앙동아리 찬빛이 2024 수정대동제 <Eternal>에서 수정이 여러분의 영원히 기억될 순간을 필름으로 담아드립니다! ",

                "찬빛 부원들이 직접 찍은 필름 사진으로 제작한 다양한 굿즈 판매와 필름 사진 촬영을 진행합니다.",
                "수정대동제의 찬란한 추억을 필름으로 간직해보아요!",

                "🎁 부스 방문시 소정의 굿즈를 드립니다! "],
            item: ["필름 사진 촬영, 포토키링, 필름 마운트 키링, 마스킹 테이프, 리무버블 스티커팩, 파우치, 찬빛 메일링 서비스 ‘심도’ 책자, 이벤트 배부 굿즈 "],
        },
        {
            id: 26,
            name: '솜망치',
            date: [3, 6],
            image: require('../../assets/img/booth/솜망치.avif'),
            location: 'A-3',
            filter: '학생 부스',
            description: [" <솜망치>는 솜’망치‘라는 부스명에 걸맞게 망치를 상징하는 조소과 학생들이 모여 자신만의 개성이 담긴 창작 상품을 판매하는 부스입니다. <솜망치>에 놀러 오셔서 손맛이 느껴지는 독특하고 개성 있는 상품들을 만나보세요!"],
            item: ["레진 키링, 뜨개 키링, 뜨개 티코스터, 젓가락 받침대, 인센스 홀더, 클레이 키링, 클레이 마그넷 "],
        },
        {
            id: 27,
            name: '연공방',
            date: [6],
            image: require('../../assets/img/booth/연공방.avif'),
            location: 'E-4',
            filter: '학생 부스',
            description: ["연공방은 청량한 컨셉으로 귀여운 개구다양한 비즈 악세사리를 저렴하게 판매합니다. 개구리의 장식물은 세계 각국에서 행운을 상징하고, 원석 또한 운세에 관련이 있습니다. 연공방은 여러분께 행운을 분양해 드립니다! "],
            item: "비즈 악세사리 ",
        },
        {
            id: 28,
            name: '<작전명 : GPS>',
            date: [3, 6],
            image: require('../../assets/img/booth/작전명-GPS.avif'),
            location: 'A-5',
            filter: '학생 부스',
            description: ["<틀린 그림 찾기> ",
                "활동 목적: 여성혐오(차별)는 다른 게 아니라 ‘틀린’ 것이라는 사실을 강조하고,",
                "이상함을 느끼지 못한 일상 속에서 여성혐오적인 요소를 발견하며 경각심을 가지게 한다. "],
            item: " ",
        },
        {
            id: 29,
            name: '세화들',
            date: [3, 6],
            image: require('../../assets/img/booth/세화들.avif'),
            location: 'A-6',
            filter: '학생 부스',
            description: ["100% 핸드메이드 브랜드 세화들입니다.",
                "무더운 여름 ! ‘세화들’ 악세서리들과  귀여운 키링들로 수정님들의 올 여름은 보다 싱그럽길 바라요 .",
                "2024 수정대동제에서 저희 부스를 찾아주신 수정님들에게 자연스럽게 스며들어 함께 특별한 흔적들을 남기고싶습니다 !",
                "당일 주문제작 상품까지 다양한 귀여움을 만나보세요! "],
            item: " 뜨개 태닝키티 키링, 오니기리키링, 뜨개 카드지갑, 뜨개미피키링, 비즈 목걸이, 원석 목걸이, 비즈 책갈피, 비즈키링",

        },
        {
            id: 30,
            name: '라일락',
            date: [3, 6],
            image: require('../../assets/img/booth/라일락.avif'),
            location: 'A-4',
            filter: '학생 부스',

            description: ["<커스텀 주얼리/소원팔찌 만들기-공예과 간접체험>",
                "공예과가 아닌이상 만드는걸 해본적이 없거나 궁금한 학생분들을 위해 준비했습니다. ",
                "여러분들의 하반기 소원은 무엇인가요?각자의 소원을 담은 팔찌 디자인 해보고 원하는 이니셜을 직접 스탬핑해보는 체험* /-",
                "각종 핸드메이드 주얼리를 판매(925은을 착한 가격에 구매할 수 있는 기회) "],
            item: " 핸드메이드 소원팔찌 , 커스텀 팔찌 , 직접 스탬핑 은 팬던트 소원팔찌 , 925은 (목걸이, 팔찌, 반지) 각종 악세사리 (원석 목걸이 , 비녀,책갈피 , 키링 )",
        },
        {
            id: 31,
            name: 'convey one’s journey',
            date: [1],
            image: require('../../assets/img/booth/convey one’s journey.avif'),
            location: 'A-2',
            filter: '학생 부스',
            description: ["성신의 역사 및 여성의 역사와 관련된 게임 진행, 앞으로 나아갈 수정님을 응원하는 프로그램 진행"],
            item: " ",
        },
        {
            id: 32,
            name: '음아정',
            date: [1],
            image: require('../../assets/img/booth/음아정.avif'),
            location: 'A-1',
            filter: '학생 부스',
            description: ['🎵"음악 좀 아는 수정"이라면 퀴즈 맞추고 상품을 받을 수 있다-!🎁난이도별 준비된 퀴즈박스에서 랜덤으로 문제를 고르면 두근두근 무슨 문제가 나올까? 문제 난이도마다 상품도 다르다고? 문제 난이도가 높을 수록 더 좋은 선물이 수정이를 기다리고 있어! 지금 당장 "음아정" 부스로 상품 확인하러 가자~🎵 '],
            item: " ",
        },
        {
            id: 33,
            name: "제4대 지식서비스공과대학 학생회 '영원'",
            date: [2, 5],
            image: require('../../assets/img/booth/영원.avif'),
            location: 'A-2 A-1',
            filter: '학생 부스',
            description: [" -⚙️영원마켓⚙️-",
                "어디에서도 본 적 없는 스쿱마켓! 달콤함을 담아가세요~🍬",
                "머그컵, 짐색, 노트패드 등 영원에서 진행한 다양한 행사 굿즈들도 만나보실 수 있습니다!",
                "귀여운 페이스 페인팅도 받고 가세요🍭"],
            item: "스쿱마켓, 머그컵, 짐색, 영원키트1/2/3, 페이스페인팅 ",
        },
        {
            id: 34,
            name: "페이스페인팅 '신비로움 나눠드립니다'",
            date: [2, 5],
            image: require('../../assets/img/booth/페이스페인팅.avif'),
            location: 'A-1 A-2',
            filter: '학생 부스',
            description: ["미술대학 학생회가 준비한 페이스페인팅 부스! 수정대동제에 참여하는 수정이들에게 신비로움을 나눠주기 위해 준비된 부스입니다. 평범한 페이스페인팅이 아닌 수정이들만을 위해 준비된 신비로운 페이스페인팅들이 준비되어있습니다! "],
            item: "페이스페인팅 ",
        },
        {
            id: 35,
            name: "세피아(Sepia)",
            date: [6],
            image: require('../../assets/img/booth/세피아.avif'),
            location: 'E-3',
            filter: '학생 부스',
            description: ["- Serendipia! : 뜻밖의 발견, 행운🍀 -",
                "우연히 세피아 부스를 발견하시는 모든 수정이 분들께 행운을 전달합니다. ",
                "포근하고 따뜻한 행운의 아이템과 함께 더욱 빛나는 가을 축제를 즐겨주세요˚ෆ*₊ "],
            item: " 비니, 카드지갑, 뜨개 키링",
        },
        {
            id: 36,
            name: "우리는 모두 연결되어 있다",
            date: [6],
            image: require('../../assets/img/booth/우리는 모두 연결되어 있다.avif'),
            location: 'E-8',
            filter: '학생 부스',
            description: ["비거니즘 동아리 베지스탈에서 소규모 사진전과 더불어 동물권, 기후위기와 관련된 굿즈를 판매합니다! 스티커와 직접 만든 자수 천 뱃지, 자수 손수건 등이 있으니 구경 오세요! "],
            item: [" 스티커, 뱃지, 손수건"],
        },
        {
            id: 37,
            name: "성신교육방송국 SEBS",
            date: [3, 6],
            image: require('../../assets/img/booth/성신교육방송국 SEBS.avif'),
            location: 'E-8',
            filter: '학생 부스',
            description: ["- 순간을 영원으로, SEBS -",
                "‘방송’이란 순간을 영원히 간직한다는 특성을 가지고 있습니다.",
                "저희 SEBS가 수정대동제에서의 순간을 영원히 간직할 수 있도록 특별한 프로그램을 준비했습니다.",
                "최신 밈에 탁월한 국원들과 함께하는 밈 스피드 퀴즈부터 SEBS 앵커와 함께하는 발음 테스트,",
                "내가 신청한 노래가 학교에 울려퍼질 기회에, 방송제 초대권 응모 기회까지?",
                "SEBS, 어디까지 준비한거야? 모두 SEBS 부스에서 색다른 체험 하시고, 상품도 받아가세요! "],
            item: [" "],
        },
        {
            id: 38,
            name: "Crystal zone",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'C-1',
            filter: '총학 부스',
            description: ["크리스탈 존 팔찌 배부, 수정이들을 위한 특별한 무대 관람 구역 제공 "],
            item: " ",
        },
        {
            id: 39,
            name: "안내부스",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'C-1',
            filter: '총학 부스',
            description: ["스탬프 투어, 보물찾기 프로그램"],
            item: " ",
        },
        {
            id: 40,
            name: "화(和)-여일",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'C-2',
            filter: '총학 부스',
            description: ["풍선 사격 컨셉의 경품 뽑기"],
            item: " ",
        },
        {
            id: 41,
            name: "수익 사업 부스",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'C-2',
            filter: '총학 부스',
            description: ["굿즈 판매(슬로건, 반다나, 응원봉, 타투 스티커, 아크릴 키링)"],
            item: " ",
        },
        {
            id: 42,
            name: "프로모션 부스",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'C-3,C-4',
            filter: '총학 부스',
            description: [
                "- Serendipia! : 뜻밖의 발견, 행운🍀 -",
                "협찬 이벤트 : 미션(미션 1 인스타그램 팔로우 후 스토리에 사진 업로드 후 계정 태그, 미션 2 친구태그하고 댓글달기) 완료시 스퀴시 멜로우 증정(26일 2시부터)"
            ],
            item: "협찬 물품 : 박카스 젤리, 동아오츠카, 몬스터 에너지, 비플레인, 이브로쉐, 체레미마카, 스퀴시멜로우, 이마트 24 생수, 토니모리 토너, 씨드비 비누 ",
        },
        {
            id: 43,
            name: "인권상담소",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-1,B-2',
            filter: '행정부서 부스',
            description: ["인권상담소 교육 홍보, 행운의 돌림판 "],
            item: " ",
        },
        {
            id: 44,
            name: "학생생활상담소",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-3',
            filter: '행정부서 부스',
            description: [
                "학생생활상담소 홍보",
                "봉중독예방센터와 중독예방 캠페인 진행 (외부기관 방문)"
            ],
            item: " ",
        },
        {
            id: 45,
            name: "학생복지위원회",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-4,B-5',
            filter: '행정부서 부스',
            description: ["성신누리 활동 홍보 및 모니터링 진행"],
            item: " ",
        },
        {
            id: 46,
            name: "학군단",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-6,B-7',
            filter: '행정부서 부스',
            description: ["24년 후반기 학군단 모집 관련 홍보활동"],
            item: " ",
        },
        {
            id: 47,
            name: "중앙도서관",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-8',
            filter: '행정부서 부스',
            description: ["도서관 이용 홍보,도서관 행사 홍보 등"],
            item: " ",
        },
        {
            id: 48,
            name: "창업지원센터",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-9',
            filter: '행정부서 부스',
            description: ["창업지원센터 프로그램 홍보 및 창업동아리, 성신유니콘센터 홍보"],
            item: " ",
        },
        {
            id: 49,
            name: "현장실습운영팀",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-10',
            filter: '행정부서 부스',
            description: ["현장실습운영팀 사업홍보 "],
            item: " ",
        },
        {
            id: 50,
            name: "대외협력홍보팀",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-11',
            filter: '행정부서 부스',
            description: ["학교SNS 및 발전기금 제도 홍보"],
            item: " ",
        },
        {
            id: 51,
            name: "국제교류지원팀",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-12',
            filter: '행정부서 부스',
            description: ["국제교류팀 홍보"],
            item: " ",
        },
        {
            id: 52,
            name: "국제교육원",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-13,B-14',
            filter: '행정부서 부스',
            description: ["국제학생 부스 운영을 통한 문화교류"],
            item: " ",
        },
        {
            id: 53,
            name: "교양교학팀",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-15',
            filter: '행정부서 부스',
            description: ["교양 교학팀 운영 신규 교과목 및 비교과 프로그램 관련 홍보"],
            item: " ",
        },
        {
            id: 54,
            name: "교수학지원팀",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-16,B-17',
            filter: '행정부서 부스',
            description: ["교수학습지원팀 학습지원프로그램 홍보 및 운영"],
            item: " ",
        },
        {
            id: 55,
            name: "박물관",
            date: [3, 6],
            image: require('../../assets/img/booth/boothimage.avif'),
            location: 'B-19,B-20',
            filter: '행정부서 부스',
            description: ["성신여자대학교박물관 홍보"],
            item: " ",
        },


    ];

    const navigate = useNavigate();
    const { id } = useParams();

    // `useMemo`로 booth 데이터를 메모이제이션하여 불필요한 재연산 방지
    const booth = useMemo(() => booths.find(b => b.id === parseInt(id)), [id]);

    const back = () => {
        setTimeout(() => {
            navigate(-1);
        }, 400);
    };

    if (!booth) {
        return <div>해당 부스를 찾을 수 없습니다.</div>;
    }

    const dateMap = {
        1: '9월 25일 오전',
        2: '9월 25일 오후',
        3: '9월 25일 종일',
        4: '9월 26일 오전',
        5: '9월 26일 오후',
        6: '9월 26일 종일'
    };
    return (
        <div className='BoothDetail container'>
            <header>
                <div className="back_btn" onClick={back}><img src={Btn} alt="뒤로가기" /></div>
                <div className="title">상세 정보</div>
            </header>

            <div className="info">
                <div className="img">
                    {/* 이미지 지연 로딩 적용 */}
                    <img src={booth.image} alt={`${booth.name}`} loading="lazy" />
                </div>
                <div className="wrap">
                    <div className="title">{booth.name}</div>
                    <div className="date_loca">
                        <div className="dates">
                            {booth.date.map(d => (
                                <div key={d} className="date">{dateMap[d]}</div>
                            ))}
                        </div>
                        <div className="location">{booth.location}</div>
                    </div>

                    <div className="subtitle">{booth.filter === '제휴 부스' ? '협찬물품' : '부스 설명'}</div>
                    <div className="boothInfo">
                        {booth.description.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                    {(booth.filter === '학생 부스' || booth.filter === '제휴 부스') ? (
                        <>
                            <div className="subtitle">{booth.filter === '제휴 부스' ? '협찬 이벤트' : '판매 물품'}</div>
                            <div className="boothItem">
                                {Array.isArray(booth.item) ? (
                                    booth.item.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))
                                ) : (
                                    <p>{booth.item}</p>
                                )}
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BoothDetail;