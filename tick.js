function tick()
{


    game = this.Runner.instance_;
    myobstacles = game.horizon.obstacles;
    
    this.Obstacle.types[0]["minGap"] = 150;
    this.Obstacle.types[1]["minGap"] = 150;

    setTimeout(function(){
        //sc
        if (game.crashed || game.paused) {
            return requestAnimationFrame(tick);
        }
        //make the speed constant to get higher score
        game.setSpeed(10);
        
        //enable ducking
        if(game.tRex.ducking)
        {
            game.tRex.setDuck(true);
        }

        
        if(myobstacles.length>0)
        {.  
           
            action = "JUMP";
            obstacle_type = myobstacles[0]["typeConfig"]["type"];
             // these two obsticle type use jump action
            if(obstacle_type=="CACTUS_SMALL" || obstacle_type=="CACTUS_LARGE")
            {
                action = "JUMP";
            }
            // these type and height use duck
            else if(obstacle_type=="PTERODACTYL")
            {
                if(myobstacles[0]["yPos"]==75 || myobstacles[0]["yPos"]==50)
                    action = "DUCK";
            }

            if(myobstacles[0].xPos<=100)
            {
                if(action=="JUMP")
                {
                    curr_speed = game.currentSpeed;
                    game.tRex.startJump(curr_speed);
                }
                else if(action=="DUCK")
                {
                    game.tRex.setDuck(true);
                }
            }
        }

        requestAnimationFrame(tick);
    })
}

tick();
