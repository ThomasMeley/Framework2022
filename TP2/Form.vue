</template>
<script>
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({

    data:()=>{
        return {
            nom: "",
            prenom :"",
            date:"",
            email:"",
            isFormActive: true,
            tweets:[],

        };
    },

    monted() {
        axios.get("https://fges-twitter-clone.herokuapp.com/allTweets", {
            header:{
            "x-fges-user-key": "Vx6pqDRk7GuhaXLMnqmt85jNtoeiyb0a",
        },
    }).then((resultats)=>{
        //gerer vos resultats ici
        console.log(resultats.data) }); 
    })
        )
    methods : {
        hideForm() {
            if (this.nom && this.person && this.Date && this.email){

            
        
            }
        }
    }
    }
})