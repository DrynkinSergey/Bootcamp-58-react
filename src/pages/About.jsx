import React from 'react'
import { useToggle } from '../hooks/useToggle'
import Modal from '../components/Modal/Modal'
import Login from '../components/Login/Login'

const About = () => {
	const { isOpen, open, close } = useToggle()
	const { isOpen: two, toggle } = useToggle()
	return (
		<div>
			About
			<button onClick={open}>OPEN MODAL</button>
			<button onClick={toggle}>OPEN MODAL 2</button>
			{isOpen ? <Modal close={close}>HELLO REACT</Modal> : null}
			{two ? (
				<Modal close={toggle}>
					<Login />
				</Modal>
			) : null}
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis accusantium laboriosam omnis deleniti optio
				ut ratione nulla enim consectetur, atque ex excepturi amet aspernatur dolores iste nam, assumenda minima
				aperiam?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam perspiciatis saepe, distinctio iste vero
				architecto mollitia cumque laboriosam enim rerum aut voluptates minus ex consectetur dignissimos velit provident
				quae. Culpa amet sit accusantium tempore esse totam alias ad cum perspiciatis inventore libero odit sed placeat
				iste rerum vel eaque eos, illum, exercitationem aliquam similique porro voluptates? Nulla, dolores ullam!
				Nostrum modi impedit adipisci sunt repellendus totam nam aspernatur et! Eius nisi repellendus alias nihil
				impedit, modi a molestias eos corporis natus quasi reiciendis animi sunt doloribus nostrum commodi odit!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum quo quia expedita doloribus. Quaerat
				magni, reiciendis laborum perspiciatis sunt rem eveniet dolorum corporis odio quam aliquam, omnis quod incidunt.
				Animi recusandae, tenetur impedit ab harum delectus dicta laboriosam soluta ut distinctio ratione inventore
				culpa? Provident atque, quo modi odit architecto, ad dolore libero sapiente vero facilis distinctio itaque
				omnis. Perspiciatis tempora, est asperiores voluptatibus aspernatur debitis. Deleniti ullam sed est illum
				architecto. Nulla eligendi dolorum soluta doloribus? Nulla ipsum iste voluptatem laboriosam accusantium sequi,
				aut vitae harum quo odio? Quam ad voluptas molestias quod consequatur sunt temporibus vel omnis tempore fugiat,
				fugit ipsa cupiditate, at sint excepturi dignissimos dicta illum corporis odit laboriosam eos aspernatur.
				Aspernatur at error quibusdam. Commodi necessitatibus quos aliquam cumque enim vitae ea ullam qui! Ut, quaerat
				vitae! Provident, laborum. Aliquam error nulla excepturi, veritatis quo facere autem magnam mollitia, inventore
				consequuntur distinctio nobis ratione?
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, repellat. At aliquid temporibus odit
				tenetur maiores, tempora deleniti? Dolorem, debitis! Illo facere quis nulla laboriosam eum beatae. Quo,
				voluptates repudiandae! Quo optio doloribus culpa, ipsum ipsam fugiat, vero magnam provident, quidem accusantium
				non veritatis tempora accusamus quasi vitae aliquam. Velit iste quam ducimus eligendi aperiam. Optio nobis ut
				facilis iste! Natus voluptatum possimus deserunt obcaecati vitae quaerat, ullam doloribus nemo aliquam veritatis
				iste libero eveniet quibusdam dolore! Et, deserunt? Maiores veritatis id nihil nostrum? Odio nihil sequi modi ut
				veritatis? Repudiandae magnam provident excepturi, quasi consectetur aperiam. Quisquam autem dolore
				exercitationem, quas tempora facilis quos ullam praesentium aliquam voluptatibus alias ipsa iste ducimus
				expedita dolorem deserunt atque, a, delectus nemo? Voluptas velit dolor, ab optio, quibusdam debitis expedita,
				provident sit aliquam corporis animi harum pariatur omnis consequatur! Est quo voluptatem, ratione tempore,
				numquam veniam, ab quisquam explicabo recusandae qui excepturi. Saepe exercitationem, inventore amet, quam,
				nihil accusamus quo fugit sunt itaque nam cum nulla obcaecati! Numquam rem ipsam cum inventore reprehenderit.
				Dolorum voluptatibus ut fugit ullam perferendis nulla praesentium eligendi. Eos sed labore explicabo blanditiis
				vero est nostrum beatae voluptatibus corporis minus illo molestias eaque ab, distinctio modi maxime eveniet
				officia minima praesentium veniam assumenda mollitia corrupti. Fuga, repellat autem. Alias facilis dignissimos
				debitis delectus nostrum officiis nobis nam vero tempora officia, cupiditate quo eius aperiam explicabo
				consequatur possimus pariatur voluptatibus ex. Expedita, vitae magnam beatae velit veritatis ipsam dolores. Amet
				ipsam, magnam enim qui ullam itaque sed rem voluptate rerum, quia in. Laudantium sapiente obcaecati veniam
				molestiae, nemo provident et rem odio, praesentium, commodi tempore temporibus culpa neque repudiandae. Eius
				laboriosam dignissimos possimus eveniet non labore, nisi voluptates, ratione illo illum modi dolores a, corporis
				architecto. Pariatur reiciendis velit quae dolore dolor sapiente labore ad esse? Fuga, hic nam?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, magni ea in inventore quod repellendus deleniti
				unde maiores reiciendis maxime repellat perferendis aliquam quidem veritatis saepe sunt eligendi quam fuga!
				Velit inventore voluptatum maiores voluptates recusandae reiciendis, sed rerum. Veritatis quidem temporibus in
				maxime totam atque reprehenderit ullam? Dolorem laboriosam eius nemo fugiat itaque officia animi maiores, unde
				molestiae facere. Nihil aperiam voluptate fugit exercitationem illo fuga a, laudantium illum rerum facere culpa,
				explicabo sapiente asperiores eveniet. Saepe dolor ut cumque quasi ipsum repellendus, voluptas dolores illo
				esse, soluta quae. Consectetur voluptatum aut accusamus corrupti hic debitis obcaecati odit iure tempora
				praesentium eius ipsum, voluptatem esse officiis quae ipsam officia facere. Natus, aliquid? Assumenda, hic
				officiis? Placeat tempora eum necessitatibus. Corrupti molestias vel beatae harum officia, obcaecati sit non
				quibusdam est deserunt voluptate. Ratione ad, nesciunt mollitia saepe consequuntur temporibus accusantium rem
				exercitationem quo aut, cupiditate, possimus ipsam harum nemo. Dolorem sequi eius, et veritatis autem nostrum
				vel iste qui blanditiis dolore cum provident quibusdam totam inventore at corrupti alias explicabo molestias
				itaque nihil aliquid culpa fugiat officiis ad! Quae? Nam et sequi molestias iste dolor, labore, tenetur dolorum
				officiis saepe earum vitae hic a reprehenderit suscipit adipisci dolores delectus quia mollitia animi asperiores
				perferendis. Nostrum possimus nobis hic repellendus! Adipisci maiores sapiente distinctio obcaecati, enim
				pariatur quaerat suscipit magnam iste fuga odit, mollitia perferendis ipsa nesciunt, minus facilis. Dolorem
				autem ad voluptas dignissimos, molestiae natus aliquid optio sed sequi. Obcaecati ut voluptatum praesentium
				similique dolores reprehenderit incidunt porro nemo illum quia accusamus suscipit, impedit ad mollitia nisi quam
				eaque repudiandae odit iusto. At cum in voluptatum animi recusandae qui. Distinctio, necessitatibus! Aliquid
				doloribus voluptatem tempora a consequuntur magni expedita, molestias totam rem rerum repudiandae asperiores
				quod architecto reiciendis alias, nulla atque voluptates illo at? Eligendi, tempore ducimus. Quaerat, maiores.
				Dolorem corrupti laudantium quod ipsam. Facilis modi, perferendis esse expedita voluptatum nulla veniam deleniti
				ullam corrupti, ab id. Nostrum ex commodi voluptatibus earum, et dicta possimus cum exercitationem aliquam id?
				Delectus fugit commodi esse nesciunt perspiciatis perferendis alias quisquam voluptas laborum id provident
				consequatur impedit dolorem mollitia, fuga ab voluptates quis tenetur sunt, accusamus cupiditate ipsam! Dolores
				quibusdam assumenda sed? Ratione, a! Quod ratione laboriosam totam neque ad a molestiae autem aspernatur dolorem
				enim fugiat est, eligendi iure placeat quo eveniet soluta reiciendis excepturi, voluptatum dolorum aliquid eius.
				Vel, porro! Nesciunt repellat vitae iure quo perspiciatis aut adipisci beatae at obcaecati quod quas, in
				voluptates, porro eum quisquam. Fugiat at eligendi omnis doloribus, qui mollitia iure perferendis assumenda
				nesciunt a. Quae nobis quisquam, laudantium beatae non accusamus consequuntur pariatur. Tempora expedita, sit
				debitis nobis obcaecati ullam deleniti neque veritatis quam, veniam ipsum facere ab reprehenderit quasi.
				Doloremque exercitationem quidem incidunt? Asperiores laudantium temporibus labore explicabo perspiciatis nihil
				sint beatae doloribus? Animi, explicabo eos. Vero ea impedit, repudiandae deserunt fugit tempora temporibus
				dolorum tenetur amet officiis debitis, inventore, enim distinctio odio! Beatae libero deleniti asperiores
				recusandae atque veniam non suscipit animi alias officia possimus ipsam autem numquam, earum architecto fugit
				dicta eaque et accusantium aperiam dignissimos. Ad ducimus nemo assumenda quos? Officiis dolorum odio, minus
				veritatis harum alias corrupti blanditiis? Adipisci distinctio nihil a corporis, neque delectus incidunt sed
				blanditiis perspiciatis repudiandae libero, vitae dicta magnam ex pariatur minus ut at. Harum quae doloremque,
				inventore nemo corporis eum ipsa velit ex numquam officia expedita optio nobis tempora. Ea id, cumque explicabo
				libero velit doloremque provident autem deserunt quae, unde suscipit laborum? Dignissimos sint laborum quia
				quasi nesciunt repellat inventore magni nostrum, soluta maiores rerum quibusdam blanditiis consequuntur
				asperiores dolorum delectus. Sit, incidunt quo optio dignissimos laborum illo quod dolor voluptatem ducimus.
				Dolores suscipit ad dolore. Iure laboriosam eius fugit eveniet omnis impedit temporibus. Nisi minima
				necessitatibus voluptate obcaecati maiores. Magni neque tempora doloremque! Natus dolorum culpa ullam cupiditate
				veritatis quaerat nostrum! Fugit suscipit voluptas consequuntur ex iste necessitatibus consequatur commodi, quos
				quo praesentium omnis obcaecati modi inventore aut! Incidunt voluptate eaque vero ducimus est esse impedit. Rem
				accusamus quis esse cum. Laborum cum saepe quidem exercitationem asperiores laudantium nemo, corrupti tenetur
				nulla quis nihil in quo voluptatibus, numquam aliquid esse porro temporibus aliquam veniam ipsum veritatis optio
				praesentium ab soluta! Voluptate. A, magni tenetur. Vitae deleniti nemo eveniet voluptas reprehenderit similique
				optio culpa sint? Labore molestias porro nemo at et quae, optio eveniet voluptatibus fuga sequi, recusandae
				distinctio nam sunt minima? Sequi aut nesciunt nam aliquid quod quo optio esse incidunt atque accusantium quae
				distinctio iusto earum necessitatibus, ullam magnam, alias porro, laborum nemo. Nulla non quidem fuga, possimus
				sequi maiores! Sit, iure fugiat? Nemo error recusandae rerum ab in laborum a tempore perferendis laboriosam
				voluptas aliquid enim quasi eligendi accusamus commodi officia itaque numquam, harum fuga ipsum odit id!
				Voluptas? Reprehenderit error corrupti ad velit maxime. Provident deleniti, velit ipsa eveniet magni, omnis
				corporis dolorum nulla recusandae a hic ab atque laborum adipisci eos doloribus officiis deserunt nostrum rerum.
				Itaque. Dignissimos eius facere enim voluptates quisquam dolorem repudiandae laudantium officiis, accusantium
				aut itaque atque reprehenderit ut? Molestias, enim quod error vitae magnam officia ullam fugit ex! Veritatis,
				dicta. Aliquid, nemo. Quidem, officia laudantium illo laboriosam et, nisi ullam optio corporis quis molestiae,
				dicta fugiat! Mollitia hic eaque asperiores? Architecto laborum natus consectetur beatae mollitia similique,
				rerum incidunt id culpa magni? Inventore maxime molestiae, officiis consequatur neque perspiciatis facere
				corporis voluptates quo error ipsam quidem consequuntur necessitatibus numquam est odit, dolores, accusantium
				amet vitae sint adipisci ex dignissimos suscipit quos. Eaque. Ratione, modi officia veritatis commodi laboriosam
				eos veniam delectus quasi eius ex aut. Eaque laboriosam, culpa nostrum velit porro corporis labore nesciunt
				deserunt sapiente quas ad repudiandae doloribus, itaque iste. Veniam iste omnis laborum sed, et voluptates, rem
				nulla officiis quia cumque repudiandae deserunt aliquid quas adipisci rerum? Animi fugiat veritatis eum delectus
				molestiae quis, distinctio sint natus iste ea? Voluptas veniam eos earum at a sapiente, blanditiis maiores enim
				vel consequatur assumenda magni libero sint aliquid nesciunt. Quam sint voluptatem nihil sit reiciendis alias
				explicabo mollitia consequatur asperiores totam. Quos dignissimos tempore quae! Corporis aliquam fugit nisi
				voluptates ea necessitatibus, enim accusamus nobis possimus obcaecati neque ab minima quibusdam accusantium
				fugiat harum corrupti natus quisquam dolorem maiores praesentium sequi. Doloribus, iste ipsa! Fuga adipisci iure
				ab cumque odio perspiciatis placeat aperiam doloribus consectetur! Magnam suscipit, nam et laudantium natus odio
				libero esse perferendis repellat debitis delectus veniam sapiente impedit. Nostrum sunt vero provident error
				corporis cum eligendi facere soluta dicta exercitationem, doloremque ullam laborum rerum eius natus, porro
				commodi beatae libero? Ea, facere tempore alias maiores dignissimos nobis officiis? Repellat accusamus doloribus
				necessitatibus labore nobis dolorum, repudiandae harum impedit libero voluptatem nostrum ipsa ullam aspernatur
				pariatur. Eligendi, dolor. Nostrum vitae nesciunt tempore accusamus saepe minus neque doloribus, architecto
				rerum! Deserunt aperiam at consequatur dolor non provident vitae tenetur laudantium voluptates, nihil magni
				aliquam totam eligendi dicta odit voluptatibus ex odio ea quos qui harum perferendis illum incidunt libero.
				Rerum? Ex voluptatibus dolores iure in itaque commodi magnam. Beatae distinctio repellendus accusamus, optio
				aliquid ratione voluptas qui enim ea hic reiciendis, culpa quis architecto dignissimos fuga commodi quibusdam,
				totam consequuntur! In, aliquam qui eius iste obcaecati mollitia eos asperiores officia? Quis quam vero iure eum
				in? Enim placeat, neque maiores harum blanditiis velit ducimus mollitia consequatur nostrum reprehenderit
				architecto assumenda?
			</p>
		</div>
	)
}

export default About
