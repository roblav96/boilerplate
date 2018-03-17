// 

import * as Vts from 'vue-property-decorator'
import { mixins as Mixins } from 'vue-class-component'
import Vue from 'vue'
import Navbar from '@/client/components/navbar/navbar'



@Vts.Component({
	components: {
		'v-navbar': Navbar,
	},
})
export default class extends Vue {

	created() {

	}

	mounted() {

	}

	beforeDestroy() {

	}



}


