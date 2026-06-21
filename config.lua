-- ############################################### --
-- ## ██╗  ██╗███████╗██████╗ ███████╗██╗   ██╗ ## --
-- ## ██║ ██╔╝██╔════╝██╔══██╗██╔════╝██║   ██║ ## --
-- ## █████╔╝ █████╗  ██║  ██║█████╗  ██║   ██║ ## --
-- ## ██╔═██╗ ██╔══╝  ██║  ██║██╔══╝  ╚██╗ ██╔╝ ## --
-- ## ██║  ██╗██║     ██████╔╝███████╗ ╚████╔╝  ## --
-- ## ╚═╝  ╚═╝╚═╝     ╚═════╝ ╚══════╝  ╚═══╝   ## --
-- ## KF Pause Menu                             ## --
-- ## Developed by KFDev                        ## --
-- ## DISCORD:         https://discord.gg/kfdev ## --
-- ## TEBEX:           https://kfdev.tebex.io   ## --
-- ## DOCUMENATION:    https://docs.kfdev.it/   ## --
-- ############################################### --

Config = {}

-- [[ Framework ]] --
-- This is the framework you are using. 
-- This is used to determine some functions like Job fetching and more.
Config.Framework = 'esx' -- 'esx' or 'qbcore' (to work with qbox put 'qbcore')

-- [[ Discord Bot Token ]] --
-- This is required for image fetching from Discord API.
-- You can create a bot at https://discord.com/developers/applications
-- It's not needed to join the bot to your server, you just need the token.
Config.BotToken = '' -- Optional

-- [[ Pause Menu Tick ]] --
-- From my research the best value for performance is 5. Lower can alter the resmon up to 0.03ms
-- Higher value can cause the real gta v pause menu to open behind the custom one.
-- You can experiment with this value but I suggest to keep it around 3-5.
Config.PauseMenuTick = 5

-- [[ COMMAND ]]
Config.EnableCommand = true
Config.Command = 'openpausemenu'
Config.EnableKeyMapping = true -- Only works if EnableCommand is set to true
Config.KeyMapping = 'ESCAPE'

-- [[ EXIT Button ]] --
-- This is the button that will be used to close the pause menu.
Config.ExitFunction = function(src)
  DropPlayer(src, 'You have exited the server.')
end

-- [[ SERVER-SIDE FUNCTIONS ]]
-- Getting Job data
Config.GetJob = function(src)
  if Config.Framework == 'esx' then
    return ESX.GetPlayerFromId(src).job.label .. ' - ' .. ESX.GetPlayerFromId(src).job.grade_label
  elseif Config.Framework == 'qbcore' then
    return QBCore.Functions.GetPlayer(src).PlayerData.job and QBCore.Functions.GetPlayer(src).PlayerData.job.label .. ' - ' .. QBCore.Functions.GetPlayer(src).PlayerData.job.grade.name or 'Unemployed'
  end
end

-- Job2 function
-- Please note that this works ONLY if you have added a job2 in your framework
-- By default it's disabled, you can enable it by replacing NIL with the function
-- commented below and setup it as your job system requires.
Config.GetJob2 = nil
-- function(src)
--   if Config.Framework == 'esx' then
--     if ESX.GetPlayerFromId().job2 == nil then
--       return false
--     end
--     return ESX.GetPlayerFromId().job2.name
--   elseif Config.Framework == 'qbcore' then
--     if QBCore.Functions.GetPlayerFromId().job2 == nil then
--       return false
--     end
--     return QBCore.Functions
--   end
-- end

Config.GetPlayerIdentifier = function(src)
  if Config.Framework == 'esx' then
    -- Fetch id_unique from database
    local xPlayer = ESX.GetPlayerFromId(src)
    local identifier = xPlayer.identifier
    
    -- Query database to get id_unique
    local result = MySQL.Sync.fetchScalar('SELECT id_unique FROM users WHERE identifier = @identifier', {
      ['@identifier'] = identifier
    })
    
    return result or identifier
  elseif Config.Framework == 'qbcore' then
    -- Fetch id_unique from database
    local xPlayer = QBCore.Functions.GetPlayer(src)
    local citizenid = xPlayer.PlayerData.citizenid
    
    -- Query database to get id_unique
    local result = MySQL.Sync.fetchScalar('SELECT id_unique FROM players WHERE citizenid = @citizenid', {
      ['@citizenid'] = citizenid
    })
    
    return result or citizenid
  end
end
